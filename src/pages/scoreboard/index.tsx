import { Button, Typography } from '@mui/material';
import PageLayout from 'components/pageLayout';
import { getScoresAction, selectScoreboard } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';
import ScoreTable from './scoreTable';
import { StyledContainer } from './styles';

const ScoreBoard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const scoreboard = useAppSelector(selectScoreboard);

  useEffect(() => {
    dispatch(getScoresAction());
  }, [dispatch]);

  const handleStartGame = async () => {
    navigate(pathKeys.user.game);
  };

  return (
    <PageLayout title='Scoreboard'>
      <StyledContainer maxWidth='xs'>
        <Typography>Top 10 Scores:</Typography>
        <ScoreTable rows={scoreboard} />
        <Button onClick={handleStartGame}>Start new game</Button>
      </StyledContainer>
    </PageLayout>
  );
};

export default ScoreBoard;
