import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { localStorageKeys } from '../../constants';
import { apiUrls } from 'services/http/apiUrls';
import { httpService } from 'services/http/http.service';
import { RootState } from 'store';
import { actionTypes } from './actionTypes';
import {
  AuthState,
  GetCurrentUserResponse,
  LoginInput,
  LoginResponse,
} from './types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: undefined,
  token: localStorage.getItem(localStorageKeys.token),
};

export const login = (data: LoginInput): Promise<LoginResponse> => {
  return httpService.post<LoginResponse, LoginInput>(apiUrls.login, data);
};

export const loginUserAction = createAsyncThunk<LoginResponse, LoginInput>(
  actionTypes.login,
  login
);

export const getMe = (): Promise<GetCurrentUserResponse> => {
  return httpService.get<GetCurrentUserResponse>(apiUrls.getMe);
};

export const getMeAction = createAsyncThunk<GetCurrentUserResponse>(
  actionTypes.getMe,
  getMe
);

export const autSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(localStorageKeys.token);
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem(localStorageKeys.token, action.payload.token);
        state.user = action.payload.user;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(getMeAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default autSlice.reducer;
export const { logout } = autSlice.actions;
