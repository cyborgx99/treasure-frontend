import PageLayout from 'components/pageLayout';
import {
  selectAuthError,
  selectAuthLoading,
  loginUserAction,
} from 'features/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import LoginForm from './loginForm';
import { MainLoginContainer } from './styles';
import { LoginFormValues } from './types';
import { loginFormValues, loginValidationSchema } from './utils';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const authError = useAppSelector(selectAuthError);
  const authLoading = useAppSelector(selectAuthLoading);

  const onSubmit = (values: LoginFormValues) => {
    dispatch(loginUserAction(values));
  };

  return (
    <PageLayout title='Login'>
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
