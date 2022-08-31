import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { spinnerSx } from './styles';

const Spinner = () => {
  return (
    <Box sx={spinnerSx}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
