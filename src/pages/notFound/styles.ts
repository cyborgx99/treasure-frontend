import { Box, Button, Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)({
  backgroundColor: 'background.default',
  margin: 0,
  height: `100%`,
  width: '100%',
  position: 'absolute',
});

export const StyledContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: `100%`,
});

export const StyledButton = styled(Button)({
  marginTop: 1,
}) as typeof Button;
