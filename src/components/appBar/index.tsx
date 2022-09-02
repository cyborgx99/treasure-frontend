import { IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { logout, selectCurrentUser } from 'features/auth/authSlice';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { StyledButton } from './styles';
import SideNavigation from 'components/sideNavigation';

const MenuAppBar = () => {
  const [isSideNavigationOpen, setIsSideNavigationOpen] = React.useState(false);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSideNavigationClose = () => {
    setIsSideNavigationOpen(false);
  };

  const handleSideNavigationOpen = () => {
    setIsSideNavigationOpen(true);
  };

  return (
    <>
      <SideNavigation
        onClose={handleSideNavigationClose}
        onOpen={handleSideNavigationOpen}
        isOpen={isSideNavigationOpen}
      />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            onClick={handleSideNavigationOpen}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          {user && (
            <StyledButton onClick={handleLogout} color='inherit'>
              Logout
            </StyledButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuAppBar;
