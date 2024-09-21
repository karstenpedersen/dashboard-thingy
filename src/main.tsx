import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { BROWSER_ROUTES } from "./consts/routes/routes";
import "./i18n";
import RootLayout from "@/components/layouts/RootLayout";

const router = createBrowserRouter(BROWSER_ROUTES);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);
