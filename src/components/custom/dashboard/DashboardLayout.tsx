import Logo from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "../ThemeSwitcher";

interface Props {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="flex flex-row items-center overflow-hidden border-b justify-between h-16 bg-background px-4">
        <div className="flex flex-row items-center gap-6">
          <Logo />
          <Breadcrumbs />
        </div>
        <div className="flex flex-row items-center gap-6">
          <SearchBar />
          <nav className="flex flex-row items-center gap-2">
            <ThemeSwitcher />
            <Button variant="link" className="px-2" asChild>
              <Link to="/settings">
                <LuSettings className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="link" className="px-2" asChild>
              <Link to="/sign-out">
                <LuLogOut className="w-5 h-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main id="main" className="py-3 px-4 flex-1">
        {children}
      </main>
    </div>
  );
}
