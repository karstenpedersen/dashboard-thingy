import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Route } from "@/consts/routeUtils";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import BreadcrumbEntry from "./BreadcrumbEntry";

export default function Breadcrumbs() {
  const [crumbs, _] = useState<Route[]>([HOME_ROUTE]);

  const lastTwoCrumbs = crumbs.slice(-2);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbEntry route={HOME_ROUTE} />
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        {lastTwoCrumbs.map((crumb) => (
          <Fragment key={crumb.path}>
            <BreadcrumbSeparator />
            <BreadcrumbEntry route={crumb} />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
