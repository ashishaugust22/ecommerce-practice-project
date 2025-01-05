import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import FallbackRoutes from './FallbackRoutes';
import ProtectedRoute from './ProtectedRoute';

type Route = {
  path: string;
  element: JSX.Element;
};

export function AppRoutes() {
  const parseRouteObjects = (routes: Route[], isPrivate: boolean = false): RouteObject[] => {
    return routes.map((route) => ({
      path: route.path,
      element: isPrivate ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element,
    }));
  };

  const publicRouteObjects = parseRouteObjects(PublicRoutes);
  const privateRouteObjects = parseRouteObjects(PrivateRoutes);
  const fallbackRouteObjects = parseRouteObjects(FallbackRoutes);

  const routes = [...publicRouteObjects, ...privateRouteObjects, ...fallbackRouteObjects];

  const allRoutes = useRoutes(routes);

  return <React.Fragment> {allRoutes} </React.Fragment>;
}
