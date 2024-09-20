import { Button } from "@/components/ui/button";
import { THEME_MODE_LOCAL_STORAGE } from "@/consts/localStorageConsts";
import { ThemeMode } from "@/types/settingsTypes";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeSwitcher() {
  const [mode, setMode] = useLocalStorage<ThemeMode>(
    THEME_MODE_LOCAL_STORAGE,
    "light"
  );

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
