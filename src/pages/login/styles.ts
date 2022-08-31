import { Avatar, Box, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

export const MainLoginContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

export const LoginWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledButton = styled(Button)({ mt: 3, mb: 2 });
