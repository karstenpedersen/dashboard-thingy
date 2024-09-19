import DashboardLayout from "@/components/custom/dashboard/DashboardLayout";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
