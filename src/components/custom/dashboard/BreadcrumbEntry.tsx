import { BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Route } from "@/consts/routes/routes";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Props {
  route: Route;
}

export default function BreadcrumbEntry({ route }: Props) {
  const { t } = useTranslation();

  return (
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <NavLink to={route.path}>{t(route.title)}</NavLink>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}
