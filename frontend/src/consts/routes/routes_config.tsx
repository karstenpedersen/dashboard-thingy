import { IconName } from "../icons";

export type ComponentElementAsString = {
  component: string;
  import: string;
};

export type RouteAsString = {
  path: string;
  title: string;
  description: string;
  element: ComponentElementAsString;
  errorElement?: ComponentElementAsString;
  children?: RouteAsString[];
  icon: IconName;
};

export type UnpackedRouteAsString = {
  path: string;
  title: string;
  description: string;
  element: string;
  errorElement?: string;
  children?: UnpackedRouteAsString[];
  icon: IconName;
};

export const ROUTES: RouteAsString[] = [
  {
    path: "/",
    title: "",
    description: "",
    icon: "moon",
    element: {
      component: "<Root />",
      import: 'import Root from "@/routes/root";',
    },
    errorElement: {
      component: "<ErrorPage />",
      import: 'import ErrorPage from "@/routes/error-page"',
    },
    children: [
      {
        path: "home",
        title: "common.routes.home.title",
        description: "common.routes.home.description",
        element: {
          component: "<Home />",
          import: 'import Home from "@/routes/home";',
        },
        icon: "home",
      },
      {
        path: "settings",
        title: "common.routes.settings.title",
        description: "common.routes.settings.description",
        element: {
          component: "<Settings />",
          import: 'import Settings from "@/routes/settings";',
        },
        icon: "settings",
      },
    ],
  },
  {
    path: "/login",
    title: "Login",
    description: "Sign in",
    icon: "moon",
    element: {
      component: "<Login />",
      import: 'import Login from "@/routes/login";',
    },
    errorElement: {
      component: "<ErrorPage />",
      import: 'import ErrorPage from "@/routes/error-page"',
    },
  },
];
