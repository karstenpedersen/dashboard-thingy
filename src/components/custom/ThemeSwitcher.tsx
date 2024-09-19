import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/store/settingsReducer";
import { StoreState } from "@/store/store";
import { LuMoon, LuSun } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

export default function Root() {
  const theme = useSelector((state: StoreState) => state.settings.theme);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
			{theme === "light" ? <LuSun className="h-4 w-4" /> : <></>}
			{theme === "dark" ? <LuMoon className="h-4 w-4" /> : <></>}
    </Button>
  );
}
