import { Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { StyledButton, StyledContent, StyledPaper } from './styles';

const NotFoundPage = () => {
  return (
    <StyledPaper>
      <StyledContent>
        <Typography variant='h4'>404</Typography>
        <Typography variant='subtitle1'>Page not found</Typography>
        <StyledButton
          component={RouterLink}
          color='secondary'
          aria-label='home'
          to='/'>
          <Home />
        </StyledButton>
      </StyledContent>
    </StyledPaper>
  );
};

export default NotFoundPage;
