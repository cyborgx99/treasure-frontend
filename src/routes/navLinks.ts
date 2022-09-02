import { pathKeys } from './pathKeys';
import { NavLinks } from './types';
import LoginIcon from '@mui/icons-material/Login';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const navLinks: NavLinks = {
  noUser: [{ name: 'Login', path: pathKeys.unathorized.home, Icon: LoginIcon }],
  user: [
    { name: 'Game', path: pathKeys.user.game, Icon: DashboardIcon },
    {
      name: 'Scoreboard',
      path: pathKeys.user.scoreboard,
      Icon: AccountBoxIcon,
    },
  ],
};
