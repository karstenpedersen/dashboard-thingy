import { THEME_MODE_LOCAL_STORAGE } from "@/consts/localStorageConsts";
import { setMode } from "@/store/themeSlice";
import { ThemeMode } from "@/types/settingsTypes";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const dispatch = useDispatch();
  const [mode, _] = useLocalStorage<ThemeMode>(
    THEME_MODE_LOCAL_STORAGE,
    "light"
  );

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  useEffect(() => {
    dispatch(setMode(mode));
  }, [mode]);

  return <>{children}</>;
}
