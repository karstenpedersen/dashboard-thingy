import { getIcon, IconName } from "@/consts/icons";
import { cloneElement, isValidElement } from "react";

export interface IconProps {
  name: IconName;
  className: string;
}

export default function Icon({ name, ...props }: IconProps) {
  const icon = getIcon(name);
  return isValidElement(icon) ? cloneElement(icon, props) : <></>;
}
