import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const mainContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
  height: '100%',
};

export const mainContent: SxProps = {
  flex: 1,
  position: 'relative',
  marginBottom: '1rem',
};

export const contentScrollable: SxProps = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

export const footer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'primary.main',
  padding: '1rem',
  color: 'primary.contrastText',
};

export const footerText: SxProps<Theme> = {
  textAlign: 'center',
  flexGrow: 1,
};
