import useThemeStore from "@/store/themeStore";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const { mode } = useThemeStore();

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return <>{children}</>;
}
