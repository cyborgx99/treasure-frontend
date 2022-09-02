import { Button, FormHelperText, Grid, Typography } from '@mui/material';
import PageLayout from 'components/pageLayout';
import Spinner from 'components/spinner';
import {
  deselectAll,
  getCurrentGameAction,
  revealTileAction,
  selectCurrentRound,
  selectGameError,
  selectGameId,
  selectGameLoading,
  selectGameStatus,
  selectSelectedTiles,
  selectTiles,
} from 'features/game/gameSlice';
import { GameStatus } from 'features/game/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { pathKeys } from 'routes/pathKeys';
import { BottomContainer, GameMainContainer } from './styles';
import TileComponent from './tileComponent';

const GamePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tiles = useAppSelector(selectTiles);
  const gameId = useAppSelector(selectGameId);
  const selectedTiles = useAppSelector(selectSelectedTiles);
  const currentRound = useAppSelector(selectCurrentRound);
  const gameStatus = useAppSelector(selectGameStatus);
  const gameError = useAppSelector(selectGameError);
  const gameLoading = useAppSelector(selectGameLoading);
  const isRevealDisabled = selectedTiles.length === 0;
  const isGameCompleted = gameStatus === GameStatus.completed;

  useEffect(() => {
    dispatch(getCurrentGameAction());
  }, [dispatch]);

  const handleReveal = async () => {
    if (!gameId) return;
    await dispatch(revealTileAction({ tiles: selectedTiles, gameId }));
  };

  const handleDeselect = () => {
    dispatch(deselectAll());
  };

  const handleViewAllScores = () => {
    navigate(pathKeys.user.scoreboard);
  };

  return (
    <PageLayout title='Game'>
      <GameMainContainer data-cy='game-container' maxWidth='xs'>
        {gameLoading ? (
          <Spinner />
        ) : (
          <>
            <Typography component='p'> Score: {currentRound}</Typography>
            {isGameCompleted && (
              <Typography
                data-cy-win
                sx={{
                  backgroundColor: 'success.main',
                  color: 'common.white',
                  padding: 1,
                  borderRadius: 0.5,
                  margin: 1,
                }}
                component='p'>
                You won!
              </Typography>
            )}
            <BottomContainer>
              {tiles.map((tile) => (
                <TileComponent tile={tile} key={`${tile.row}${tile.col}`} />
              ))}
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button
                    data-cy='reveal-button'
                    onClick={handleReveal}
                    fullWidth
                    color='success'
                    variant='contained'
                    disabled={isRevealDisabled}>
                    Reveal
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    data-cy='deselect-button'
                    disabled={isRevealDisabled}
                    onClick={handleDeselect}
                    fullWidth
                    color='warning'
                    variant='contained'>
                    Deselect
                  </Button>
                </Grid>
                <FormHelperText error>{gameError}</FormHelperText>
              </Grid>
              {isGameCompleted && (
                <Button
                  data-cy-view-scores
                  onClick={handleViewAllScores}
                  fullWidth
                  variant='contained'>
                  View all scores
                </Button>
              )}
            </BottomContainer>
          </>
        )}
      </GameMainContainer>
    </PageLayout>
  );
};

export default GamePage;
