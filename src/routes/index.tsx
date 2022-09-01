import { selectCurrentUser } from 'features/auth/authSlice';
import { useAppSelector } from 'hooks/redux';
import NotFoundPage from 'pages/notFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../components/spinner';
import { authorizedRoutes } from './authorizedRoutes';
import { pathKeys } from './pathKeys';
import ProtectedRoute from './protectedRoute';
import { unathorizedRoutes } from './unathorizedRoutes';

const AppRoutes = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route
            element={
              <ProtectedRoute
                redirectPath={pathKeys.user.game}
                isAllowed={!user}
              />
            }>
            {unathorizedRoutes.map(({ path, Component }, i) => (
              <Route
                path={path}
                key={path}
                index={i === 0}
                element={<Component />}
              />
            ))}
          </Route>
          <Route
            element={
              <ProtectedRoute
                redirectPath={pathKeys.unathorized.home}
                isAllowed={!!user}
              />
            }>
            {authorizedRoutes.map(({ path, Component }, i) => (
              <Route
                path={path}
                key={path}
                index={i === 0}
                element={<Component />}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
