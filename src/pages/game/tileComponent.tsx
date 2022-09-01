import { Button } from '@mui/material';
import { selectSelectedTiles } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { TyleComponentProps } from './types';
import { toggleTile } from 'features/game/gameSlice';
import { TileComponentContainer } from './styles';

const TileComponent = ({ tile }: TyleComponentProps) => {
  const selectedTiles = useAppSelector(selectSelectedTiles);
  const isSelected = selectedTiles.some(
    (t) => t.col === tile.col && t.row === tile.row
  );
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleTile(tile));
  };

  return (
    <TileComponentContainer>
      <Button
        onClick={handleToggle}
        sx={{
          width: '100%',
          height: '100%',
          minWidth: 20,
          minHeight: 75,
        }}
        variant={isSelected ? 'contained' : 'outlined'}>
        {tile.content}
      </Button>
    </TileComponentContainer>
  );
};

export default TileComponent;
