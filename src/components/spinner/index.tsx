import { CircularProgress } from '@mui/material';
import React from 'react';
import { SpinnerContainer } from './styles';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
};

export default Spinner;
