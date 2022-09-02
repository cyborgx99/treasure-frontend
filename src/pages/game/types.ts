import { SxProps } from '@mui/material';
import { Tile, TileContent } from 'features/game/types';

export interface TyleComponentProps {
  tile: Tile;
}

export interface TileComponentContainerProps {
  isSelected: boolean;
}

export type ButtonBackground = {
  [key in TileContent]: SxProps;
};
