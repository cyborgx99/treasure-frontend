import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { selectCurrentUser } from 'features/auth/authSlice';
import { User } from 'features/auth/types';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { navLinks } from 'routes/navLinks';
import { MainBox, StyledLink, sxActive } from './styles';
import { SideNavigationProps } from './types';

const getNavLinks = (user: User | null) => {
  if (user) return navLinks.user;
  return navLinks.noUser;
};

const SideNavigation = ({ isOpen, onClose, onOpen }: SideNavigationProps) => {
  const user = useAppSelector(selectCurrentUser);
  const navlinks = getNavLinks(user);

  return (
    <SwipeableDrawer
      anchor='left'
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}>
      <MainBox>
        <nav aria-label='Main navbar'>
          <List>
            {navlinks.map(({ Icon, name, path }) => (
              <ListItem key={path} disablePadding>
                <StyledLink to={path}>
                  {({ isActive }) => (
                    <ListItemButton sx={isActive ? sxActive : undefined}>
                      {Icon && (
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                      )}
                      <ListItemText primary={name} />
                    </ListItemButton>
                  )}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </nav>
      </MainBox>
    </SwipeableDrawer>
  );
};

export default SideNavigation;
