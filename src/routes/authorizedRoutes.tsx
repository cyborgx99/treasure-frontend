import { lazy } from 'react';

import { pathKeys } from './pathKeys';
import { RouteInterface } from './types';

const GamePage = lazy(() => import('../pages/game'));
const ScoreboardPage = lazy(() => import('../pages/scoreboard'));

export const authorizedRoutes: RouteInterface[] = [
  {
    path: pathKeys.user.game,
    Component: GamePage,
  },
  {
    path: pathKeys.user.scoreboard,
    Component: ScoreboardPage,
  },
];
