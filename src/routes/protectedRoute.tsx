import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ProtectedRouteProps } from './types';

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/',
  children,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
