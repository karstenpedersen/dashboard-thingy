import HomePage from "@/routes/home";
import { z } from "zod";
import { IconName } from "@/consts/icons";
import { ReactNode } from "react";
import { TranslationKey } from "@/types/i18next";
import { RouteObject } from "react-router-dom";
import RootPage from "@/routes/root";
import ErrorPage from "@/routes/error-page";
import SettingsPage from "@/routes/settings";
import LoginPage from "@/routes/login";

export const ROUTE_PATHS = ["/", "/login", "/home", "/settings"] as const;
const routePathEnum = z.enum(ROUTE_PATHS);
export type RoutePath = z.infer<typeof routePathEnum>;

export type Route = {
  path: RoutePath;
  title: TranslationKey;
  description: TranslationKey;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Route[];
  icon: IconName;
};

export const HOME_ROUTE: Route = {
  path: "/home",
  title: "routes.home.title",
  description: "routes.home.description",
  element: <HomePage />,
  icon: "home",
};

export const SETTINGS_ROUTE: Route = {
  path: "/settings",
  title: "routes.settings.title",
  description: "routes.settings.description",
  element: <SettingsPage />,
  icon: "settings",
};

const ROUTES: Record<RoutePath, Route> = {
  "/": HOME_ROUTE,
  "/home": HOME_ROUTE,
  "/settings": HOME_ROUTE,
  "/login": HOME_ROUTE,
} as const;

export const BROWSER_ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
];

export function isRoutePath(path: string): path is RoutePath {
  return path in ROUTE_PATHS;
}

export function getRoutes(): Route[] {
  return Object.values(ROUTES);
}

export function getRoute(path: RoutePath): Route {
  return ROUTES[path];
}
