import { Button, Typography } from '@mui/material';
import PageLayout from 'components/pageLayout';
import React from 'react';
import { ErrorPageContainer } from './styles';
import { ErrorPageProps } from './types';

const ErrorPage = ({ reload }: ErrorPageProps) => {
  return (
    <PageLayout title='Oops'>
      <ErrorPageContainer maxWidth='xs'>
        <Typography>Something went wrong</Typography>
        <Typography>
          An error has occurred. In some cases, reloading the page can resolve
          the issue. If the error persists, please contact us.
        </Typography>
        <Button fullWidth type='button' onClick={reload}>
          Reload
        </Button>
      </ErrorPageContainer>
    </PageLayout>
  );
};

export default ErrorPage;
