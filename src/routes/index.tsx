import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../components/spinner';
import { unathorizedRoutes } from './unathorizedRoutes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {unathorizedRoutes.map(({ path, Component }, i) => (
            <Route
              path={path}
              key={path}
              index={i === 0}
              element={<Component />}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
