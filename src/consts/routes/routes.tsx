import Home from "@/routes/home";
import { z } from "zod";
import { IconName } from "@/consts/icons";
import { ReactNode } from "react";

export const ROUTE_PATHS = ["/", "/login", "/home", "/settings"] as const;
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

export const HOME_ROUTE: Route = {
  path: "/home",
  title: "common.routes.home.title",
  description: "common.routes.home.description",
  element: <Home />,
  icon: "home",
};

const ROUTES: Route[] = [];

export default ROUTES;
