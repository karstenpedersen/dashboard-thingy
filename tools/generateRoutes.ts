import * as fs from "fs";
import * as path from "path";
import { RouteObject } from "react-router-dom";
import {
  ROUTES,
  RouteAsString,
  UnpackedRouteAsString,
} from "../src/consts/routes/routes_config";

export type RouteObjectAsStrings = {
  path: string;
  element: string;
  errorElement?: string;
  children?: RouteObjectAsStrings[];
};

function transformNestedRoutes(nestedRoutes: RouteAsString[]): {
  routes: Record<string, UnpackedRouteAsString>;
  browserRoutes: RouteObject[];
  routePaths: string[];
  imports: Set<string>;
  individualRoutes: UnpackedRouteAsString[];
} {
  const routes: Record<string, UnpackedRouteAsString> = {};
  const routePaths: string[] = [];
  const imports: Set<string> = new Set();

  function unpack(
    rs: RouteAsString[],
    parent: string = ""
  ): UnpackedRouteAsString[] {
    return rs.map((route) => {
      const routePath = parent ? `${parent}${route.path}/` : `${route.path}`;
      routePaths.push(routePath);

      imports.add(route.element.import);
      if (route.errorElement) {
        imports.add(route.errorElement.import);
      }

      return {
        path: routePath,
        title: route.title,
        description: route.description,
        element: route.element.component,
        icon: route.icon,
        errorElement: route.errorElement?.component,
        children: route.children
          ? unpack(route.children, routePath)
          : undefined,
      };
    });
  }

  const unpackedRoutes: UnpackedRouteAsString[] = unpack(nestedRoutes);

  function getBrowserRouter(rs: UnpackedRouteAsString[]): RouteObject[] {
    return rs.map((route) => {
      routes[route.path] = route;

      return {
        path: route.path,
        element: route.element,
        errorElement: route.errorElement,
        children: route.children ? getBrowserRouter(route.children) : undefined,
      };
    });
  }
  const browserRoutes: RouteObject[] = getBrowserRouter(unpackedRoutes);

  const individualRoutes = Object.values(routes);

  return {
    routes,
    individualRoutes,
    browserRoutes,
    routePaths,
    imports,
  };
}

function compile(output: string) {
  console.log("Starting to transform routes.");
  const { routes, browserRoutes, imports, routePaths, individualRoutes } =
    transformNestedRoutes(ROUTES);

  const code = `// Edit 'routes_config.ts' and then run 'main.ts'.
import { Route } from "@/types/routeTypes";
import { z } from "zod";
import { IconName } from "../icons";
${Array.from(imports).join("\n")}

// Route paths
export const ROUTE_PATHS = [${routePaths.join(", ")}] as const;
const routePathEnum = z.enum(ROUTE_PATHS);
export type RoutePath = z.infer<typeof routePathEnum>;

export type Route = {
  path: RoutePath;
  title: string;
  description: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Route[];
  icon: IconName;
};

${individualRoutes
  .map(
    (route) =>
      `const ${route.title.toUpperCase().normalize()}_ROUTE = ${JSON.stringify(
        route
      )};`
  )
  .join("\n\n")}

${JSON.stringify(routes)};

const BROWSER_ROUTES = [
${browserRoutes.map((route) => JSON.stringify(route)).join(",\n")}
];`;

  console.log(`Wrote to file: ${output}`);
  fs.writeFileSync(output, code);
}

const output = path.resolve(__dirname, "routes.ts");
compile(output);
