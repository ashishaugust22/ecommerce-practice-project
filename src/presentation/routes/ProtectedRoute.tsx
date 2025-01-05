import React from 'react';
import { useLocation, Navigate } from 'react-router';

function ProtectedRoute({ children }: React.PropsWithChildren) {
  // TODO: Implement authentication logic
  const isLoggedIn = true;
  const { pathname } = useLocation();

  if (!isLoggedIn && pathname) {
    return <Navigate to={`/login?from=${pathname}`} />;
  }

  return children;
}

export default ProtectedRoute;
