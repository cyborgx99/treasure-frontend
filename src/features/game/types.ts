import { User } from 'features/auth/types';

export enum TileContent {
  TREASURE = 'T',
  THREE = '3',
  TWO = '2',
  ONE = '1',
}

export interface Tile {
  row: number;
  col: number;
  content?: TileContent;
}

export interface Scoreboard {
  score: number;
  user: User;
}

export enum GameStatus {
  completed = 'completed',
  uninitialized = 'uninitialized',
  notFound = 'notFound',
  started = 'started',
}

export interface GameState {
  tiles: Tile[];
  selectedTiles: Tile[];
  round: number;
  gameStatus: GameStatus;
  gameId?: string;
  isLoading: boolean;
  error?: string;
  scoreboard: Scoreboard[];
}

export interface RevealInput {
  tiles: Tile[];
  gameId: string;
}

export interface RevealResponse {
  tiles: Tile[];
  round: number;
  status: GameStatus;
}

export interface StartGameResponse {
  gameId: string;
  tiles: Tile[];
  gameStatus: GameStatus;
  round: number;
}

export interface GetCurrentGame extends StartGameResponse {}

export interface GetScoresResponse {
  scores: Scoreboard[];
}
