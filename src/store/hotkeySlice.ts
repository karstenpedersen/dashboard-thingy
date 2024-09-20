import { Hotkey, HotkeyMap } from "@/types/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: HotkeyMap = {
  commandPalette: "ctrl+k",
};

const hotkeySlice = createSlice({
  name: "hotkeys",
  initialState,
  reducers: {
    setHotkey: (
      state,
      action: PayloadAction<{ key: Hotkey; hotkey: string }>
    ) => {
      state[action.payload.key] = action.payload.hotkey;
    },
  },
});

export const { setHotkey } = hotkeySlice.actions;

export default hotkeySlice.reducer;
