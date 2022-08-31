import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
  height: '100%',
});

export const MainContent = styled(Box)({
  flex: 1,
  position: 'relative',
  marginBottom: '1rem',
});

export const ContentScrollable = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

export const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  padding: '1rem',
  color: theme.palette.primary.contrastText,
}));

export const FooterText = styled(Typography)({
  textAlign: 'center',
  flexGrow: 1,
});
