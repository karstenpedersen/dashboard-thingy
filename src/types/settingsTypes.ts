import { z } from "zod";

export const THEMES = ["light", "dark"] as const;

const themeEnum = z.enum(THEMES);
const settingsSchema = z.object({
  theme: themeEnum,
  hotkeys: z.record(z.string()),
});

export type Settings = z.infer<typeof settingsSchema>;
