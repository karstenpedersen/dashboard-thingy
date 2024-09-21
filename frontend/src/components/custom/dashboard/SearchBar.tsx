import { useState } from "react";
import CommandPalette from "../CommandPalette";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-full md:min-w-40 lg:min-w-52 rounded-full items-center border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LuSearch className="mr-2 w-4 h-4" />
        Search...
      </button>
      <CommandPalette open={open} setOpen={setOpen} />
    </>
  );
}
