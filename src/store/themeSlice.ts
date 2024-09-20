import { ThemeMode } from "@/types/settingsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { mode: ThemeMode } = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = themeSlice.actions;

export default themeSlice.reducer;
