import { lazy } from 'react';
import { pathKeys } from './pathKeys';
import { RouteInterface } from './types';

const LoginPage = lazy(() => import('../pages/login'));

export const unathorizedRoutes: RouteInterface[] = [
  {
    path: pathKeys.unathorized.home,
    Component: LoginPage,
  },
];
