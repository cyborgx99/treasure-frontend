import {
  configureStore,
  combineReducers,
  AnyAction,
  Reducer,
} from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import gameReducer from 'features/game/gameSlice';

const combinedReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/logout') {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
