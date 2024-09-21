import { ThemeMode } from "@/types/settingsTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "light",
      setMode: (mode) => set((_) => ({ mode })),
    }),
    { name: "theme" }
  )
);

export default useThemeStore;
