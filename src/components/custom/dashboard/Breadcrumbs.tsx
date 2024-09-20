import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HOME_ROUTE } from "@/consts/routes/routes";
import useRouteMetadata from "@/hooks/useRouteMetadata";
import { Fragment } from "react";
import BreadcrumbEntry from "./BreadcrumbEntry";

export default function Breadcrumbs() {
  const { crumbs } = useRouteMetadata();
  const lastTwoCrumbs = crumbs.slice(-2);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbEntry route={HOME_ROUTE} />
        {crumbs.length > 2 ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
          </>
        ) : (
          <></>
        )}
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
