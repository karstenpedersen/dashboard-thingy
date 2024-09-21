import { Command } from "@/types/commandPaletteTypes";
import { create } from "zustand";

type CommandStore = {
  commands: { [key: string]: Command };
  addCommand: (key: string, cmd: Command) => void;
  removeCommand: (key: string) => void;
};

const useCommandsStore = create<CommandStore>()((set) => ({
  commands: {},
  addCommand: (key, cmd) =>
    set((state) => ({ commands: { ...state.commands, [key]: cmd } })),
  removeCommand: (key) =>
    set((state) => {
      const { [key]: _, ...commands } = state.commands;
      return { commands };
    }),
}));

export default useCommandsStore;
