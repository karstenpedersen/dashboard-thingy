import { CommandEmpty } from "cmdk";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useSelector } from "react-redux";
import { StoreState } from "@/store/store";
import Icon from "./Icon";
import { Dispatch, SetStateAction } from "react";
import { useHotkeys } from "react-hotkeys-hook";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CommandPalette({ open, setOpen }: Props) {
  const commands = useSelector((state: StoreState) => state.commands.commands);
  const hotkeys = useSelector((state: StoreState) => state.settings.hotkeys);

  useHotkeys(hotkeys.commandPalette, () => {
    setOpen(!open);
  });

  return (
    <CommandDialog open={open} onOpenChange={(value) => setOpen(value)}>
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
