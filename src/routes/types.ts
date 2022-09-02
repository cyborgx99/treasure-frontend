import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface RouteInterface {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: React.ReactNode;
}

export enum NavLinkFor {
  noUser = 'noUser',
  user = 'user',
}

export type NavLink = {
  name: string;
  path: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
};

export type NavLinks = {
  [key in NavLinkFor]: NavLink[];
};
