import { z } from "zod";

// Themes
export const THEME_MODES = ["light", "dark"] as const;
const themeModeEnum = z.enum(THEME_MODES);
export type ThemeMode = z.infer<typeof themeModeEnum>;

export const THEME_MODE_MAP: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
} as const;

const themeSchema = z.object({
  mode: themeModeEnum,
});
export type Theme = z.infer<typeof themeSchema>;

// Hotkeys
export const HOTKEYS = ["commandPalette"] as const;
const hotkeyEnum = z.enum(HOTKEYS);
const hotkeySchema = z.record(hotkeyEnum, z.string());
export type Hotkey = z.infer<typeof hotkeyEnum>;
export type HotkeyMap = Record<Hotkey, string>;

// Combine user settings
const userSettingsSchema = z.object({
  theme: themeSchema,
  hotkeys: hotkeySchema,
});

export type UserSettings = z.infer<typeof userSettingsSchema>;

export function isUserSettings(object: object): object is UserSettings {
  return object && userSettingsSchema.safeParse(object).success;
}
