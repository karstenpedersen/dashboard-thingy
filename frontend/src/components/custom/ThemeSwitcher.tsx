import { Button } from "@/components/ui/button";
import useThemeStore from "@/store/themeStore";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeSwitcher() {
  const { mode, setMode } = useThemeStore();

  return (
    <Button
      variant="link"
      className="px-2"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "light" ? <LuSun className="h-5 w-5" /> : <></>}
      {mode === "dark" ? <LuMoon className="h-5 w-5" /> : <></>}
    </Button>
  );
}
