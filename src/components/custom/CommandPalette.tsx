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
import { Dispatch, SetStateAction, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import loadRouteCommands from "@/consts/routes/routeCommands";
import { useAppSelector } from "@/hooks/redux";
import { DialogTitle } from "@radix-ui/react-dialog";
import VisuallyHidden from "./VisuallyHidden";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CommandPalette({ open, setOpen }: Props) {
  const commands = useAppSelector((state) => state.commands.commands);
  const hotkeys = useAppSelector((state) => state.userSettings.hotkeys);

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
