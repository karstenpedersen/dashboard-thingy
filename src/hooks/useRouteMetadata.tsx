import { getRoute, isRoutePath, Route } from "@/consts/routes/routes";
import { useLocation } from "react-router-dom";

function useRouteMetadata() {
  const location = useLocation();
  const path = location.pathname;

  const crumbs: Route[] = [];
  let currentPath = path;
  let current: Route | undefined;

  while (currentPath) {
    if (!isRoutePath(currentPath)) {
      break;
    }
    current = getRoute(currentPath);
    crumbs.unshift(current);
    currentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
  }

  return { crumbs, metadata: current };
}

export default useRouteMetadata;
