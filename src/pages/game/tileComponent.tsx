import { Button, Typography } from '@mui/material';
import { selectGameStatus, selectSelectedTiles } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { ButtonBackground, TyleComponentProps } from './types';
import { toggleTile } from 'features/game/gameSlice';
import { TileComponentContainer } from './styles';
import { GameStatus, TileContent } from 'features/game/types';

const TileComponent = ({ tile }: TyleComponentProps) => {
  const selectedTiles = useAppSelector(selectSelectedTiles);
  const isSelected = selectedTiles.some(
    (t) => t.col === tile.col && t.row === tile.row
  );
  const gameStatus = useAppSelector(selectGameStatus);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleTile(tile));
  };
  const isCompleted = gameStatus === GameStatus.completed;
  const isDisabled = Boolean(tile.content) || isCompleted;

  const bgColor: ButtonBackground = {
    [TileContent.ONE]: {
      backgroundColor: 'grey.400',
    },
    [TileContent.TWO]: {
      backgroundColor: 'warning.light',
    },
    [TileContent.THREE]: {
      backgroundColor: 'warning.dark',
    },
    [TileContent.TREASURE]: {
      backgroundColor: 'error.dark',
    },
  };

  const getBgColor = () => {
    if (!tile.content) return {};
    return bgColor[tile.content];
  };

  return (
    <TileComponentContainer>
      <Button
        disabled={isDisabled}
        onClick={handleToggle}
        sx={{
          width: '100%',
          height: '100%',
          minWidth: 20,
          minHeight: 70,
          ...getBgColor(),
        }}
        variant={isSelected ? 'contained' : 'outlined'}>
        <Typography sx={{ color: 'common.white' }}>{tile.content}</Typography>
      </Button>
    </TileComponentContainer>
  );
};

export default TileComponent;
