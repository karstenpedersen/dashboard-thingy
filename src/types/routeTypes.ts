import { IconName } from "@/consts/icons";
import { ReactNode } from "react";

export type Route = {
  path: string;
  title: string;
  description: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Route[];
  icon: IconName;
};
