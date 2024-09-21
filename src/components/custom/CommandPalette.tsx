import useCommandsStore from "@/store/commandsStore";
import useHotkeyStore from "@/store/hotkeyStore";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CommandEmpty } from "cmdk";
import { Dispatch, SetStateAction } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import Icon from "./Icon";
import VisuallyHidden from "./VisuallyHidden";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CommandPalette({ open, setOpen }: Props) {
  const { commands } = useCommandsStore();
  const { hotkeys } = useHotkeyStore();

  useHotkeys(hotkeys.commandPalette, () => {
    setOpen(!open);
  });

  return (
    <CommandDialog open={open} onOpenChange={(value) => setOpen(value)}>
      <VisuallyHidden>
        <DialogTitle>Command Palette</DialogTitle>
      </VisuallyHidden>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup>
          {Object.values(commands).map((command) => (
            <CommandItem key={command.id} onSelect={command.function}>
              <Icon name={command.icon} className="mr-2" />
              <span>{command.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandEmpty className="px-3 pb-3 pt-1">
          No results found.
        </CommandEmpty>
      </CommandList>
    </CommandDialog>
  );
}
