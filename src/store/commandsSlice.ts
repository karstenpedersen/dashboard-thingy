import { Command } from "@/types/commandPaletteTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommandsState {
  commands: { [key: string]: Command };
}

const initialState: CommandsState = {
  commands: {},
};

const commandsSlice = createSlice({
  name: "commands",
  initialState,
  reducers: {
    addCommand: (state, action: PayloadAction<Command>) => {
      state.commands[action.payload.id] = action.payload;
    },
    removeCommand: (state, action: PayloadAction<string>) => {
      delete state.commands[action.payload];
    },
    executeCommand: (state, action: PayloadAction<string>) => {
      if (action.payload in state.commands) {
        state.commands[action.payload].function();
      }
    },
  },
});

export const { addCommand, removeCommand, executeCommand } =
  commandsSlice.actions;

export default commandsSlice.reducer;
