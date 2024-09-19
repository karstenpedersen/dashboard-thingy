import Logo from "@/components/custom/Logo";
import Breadcrumbs from "./Breadcrumbs";
import { ReactNode } from "react";
import SearchBar from "./SearchBar";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { LuSettings } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

interface Props {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh">
      <header className="flex flex-row items-center border-b justify-between h-16 bg-background px-4">
        <div className="flex flex-row items-center gap-6">
          <Logo />
          <Breadcrumbs />
        </div>
        <div className="flex flex-row items-center gap-6">
          <SearchBar />
          <nav className="flex flex-row items-center gap-2">
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
      <main>{children}</main>
    </div>
  );
}
