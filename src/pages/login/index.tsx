import PageLayout from 'components/pageLayout';
import {
  getAuthError,
  getAuthLoading,
  loginUser,
} from 'features/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import LoginForm from './loginForm';
import { MainLoginContainer } from './styles';
import { LoginFormValues } from './types';
import { loginFormValues, loginValidationSchema } from './utils';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector(getAuthError);
  const authLoading = useAppSelector(getAuthLoading);

  const onSubmit = async (values: LoginFormValues) => {
    await dispatch(loginUser(values));
  };

  return (
    <PageLayout>
      <MainLoginContainer maxWidth='xs'>
        <LoginForm
          error={authError}
          onSubmit={onSubmit}
          isLoading={authLoading}
          initialValues={loginFormValues}
          validationSchema={loginValidationSchema}
        />
      </MainLoginContainer>
    </PageLayout>
  );
};

export default LoginPage;
