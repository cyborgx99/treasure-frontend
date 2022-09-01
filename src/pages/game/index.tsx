import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import PageLayout from 'components/pageLayout';
import {
  deselectAll,
  selectCurrentRound,
  selectGameId,
  selectSelectedTiles,
  selectTiles,
} from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import TileComponent from './tileComponent';

const GamePage = () => {
  const tiles = useAppSelector(selectTiles);
  const gameId = useAppSelector(selectGameId);
  const selectedTiles = useAppSelector(selectSelectedTiles);
  const dispatch = useAppDispatch();
  const isRevealDisabled = selectedTiles.length === 0;
  const currentRound = useAppSelector(selectCurrentRound);

  const handleDeselect = () => {
    dispatch(deselectAll());
  };

  return (
    <PageLayout>
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: ' center',
        }}
        maxWidth='xs'>
        {gameId ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {tiles.map((tile) => (
              <TileComponent tile={tile} key={`${tile.row}${tile.col}`} />
            ))}
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  color='success'
                  variant='contained'
                  disabled={isRevealDisabled}>
                  Reveal
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  disabled={isRevealDisabled}
                  onClick={handleDeselect}
                  fullWidth
                  color='warning'
                  variant='contained'>
                  Deselect all
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Button variant='contained' color='success'>
            Start new game
          </Button>
        )}
      </Container>
    </PageLayout>
  );
};

export default GamePage;
