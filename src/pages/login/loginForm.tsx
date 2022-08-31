import { Box } from '@mui/system';
import FormTextField from 'components/formField';
import { Form, Formik } from 'formik';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { LoginWrapper, StyledAvatar, StyledButton } from './styles';
import { LoginFormNames, LoginFormProps } from './types';
import { FormHelperText, Typography } from '@mui/material';

const LoginForm = ({
  isLoading,
  onSubmit,
  validationSchema,
  initialValues,
  error,
}: LoginFormProps) => {
  return (
    <Box>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}>
        <Form>
          <LoginWrapper>
            <StyledAvatar>
              <LockOpenIcon />
            </StyledAvatar>
            <Typography component='h1' variant='h5'>
              Please tell us your name
            </Typography>
            <FormTextField
              margin='normal'
              required
              fullWidth
              label='Name'
              name={LoginFormNames.name}
              autoComplete='name'
            />
            <FormHelperText error>{error}</FormHelperText>
            <StyledButton
              disabled={isLoading}
              type='submit'
              fullWidth
              variant='contained'>
              Continue
            </StyledButton>
          </LoginWrapper>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
