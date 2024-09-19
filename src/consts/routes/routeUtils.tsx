import { RouteObject } from "react-router-dom";
import { z } from "zod";
import ROUTES, { Route } from "./routes";
export const ROUTE_PATHS = ["/", "/login", "/home", "/settings"] as const;
const routePathEnum = z.enum(ROUTE_PATHS);
export type RoutePath = z.infer<typeof routePathEnum>;

function mapRoutes(routes: Route[], parent: string = ""): RouteObject[] {
  return routes.map(({ path, element, children, errorElement }) => {
    const routePath = parent ? `${parent}${path}/` : `${path}`;
    return {
      path: routePath,
      element,
      errorElement,
      children: children ? mapRoutes(children, routePath) : undefined,
    };
  });
}

export function getBrowserRoutes() {
  return mapRoutes(Object.values(ROUTES));
}
