export interface RouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: React.ReactNode;
}
