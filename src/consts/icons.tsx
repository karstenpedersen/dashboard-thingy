import { ReactNode } from "react";
import { LuHome, LuMoon, LuSettings, LuSun } from "react-icons/lu";
import { z } from "zod";

export const ICON_NAMES = ["moon", "sun", "home", "settings"] as const;

export const iconNamesEnum = z.enum(ICON_NAMES);
export type IconName = z.infer<typeof iconNamesEnum>;

const ICONS: Record<IconName, ReactNode> = {
  moon: <LuMoon />,
  sun: <LuSun />,
  home: <LuHome />,
  settings: <LuSettings />,
};

export function getIcon(name: IconName) {
  return ICONS[name];
}
