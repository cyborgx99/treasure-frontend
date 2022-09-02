import { NavLink as RouterLink } from 'react-router-dom';
import { Box, styled, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  width: 100%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const MainBox = styled(Box)({
  width: '100%',
  maxWidth: 360,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sxActive: SxProps<Theme> = { backgroundColor: 'action.selected' };
