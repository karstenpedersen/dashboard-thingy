import { Hotkey, HotkeyMap } from "@/types/settingsTypes";
import { create } from "zustand";

export const DEFAULT_HOTKEYS: HotkeyMap = {
  commandPalette: "ctrl+k",
};

type HotkeyStore = {
  hotkeys: HotkeyMap;
  setHotkey: (key: Hotkey, kb: string) => void;
};

const useHotkeyStore = create<HotkeyStore>()((set) => ({
  hotkeys: DEFAULT_HOTKEYS,
  setHotkey: (hotkey, kb) =>
    set((state) => ({ hotkeys: { ...state.hotkeys, [hotkey]: kb } })),
}));

export default useHotkeyStore;
