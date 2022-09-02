import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiUrls } from 'services/http/apiUrls';
import { httpService } from 'services/http/http.service';
import { RootState } from 'store';
import { actionTypes } from './actionTypes';

import {
  GameState,
  GameStatus,
  GetCurrentGame,
  GetScoresResponse,
  RevealInput,
  RevealResponse,
  Tile,
} from './types';

const initialState: GameState = {
  tiles: [],
  selectedTiles: [],
  round: 0,
  gameId: '',
  gameStatus: GameStatus.uninitialized,
  isLoading: false,
  error: '',
  scoreboard: [],
};

export const getScores = (): Promise<GetScoresResponse> => {
  return httpService.get<GetScoresResponse>(apiUrls.game.scoreboard);
};

export const getScoresAction = createAsyncThunk<GetScoresResponse>(
  actionTypes.scores,
  getScores
);

export const getCurrentGame = (): Promise<GetCurrentGame> => {
  return httpService.get<GetCurrentGame>(apiUrls.game.currentGame);
};

export const getCurrentGameAction = createAsyncThunk<GetCurrentGame>(
  actionTypes.currentGame,
  getCurrentGame
);

export const reveal = (data: RevealInput): Promise<RevealResponse> => {
  return httpService.post<RevealResponse, RevealInput>(
    apiUrls.game.reveal,
    data
  );
};

export const revealTileAction = createAsyncThunk<RevealResponse, RevealInput>(
  actionTypes.reveal,
  reveal
);

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    toggleTile: (
      state,
      action: PayloadAction<{ row: number; col: number }>
    ) => {
      const index = state.selectedTiles.findIndex(
        (tile) =>
          tile.col === action.payload.col && tile.row === action.payload.row
      );

      if (index !== -1) {
        state.selectedTiles.splice(index, 1);
        return;
      }

      if (state.selectedTiles.length === 3) return;
      state.selectedTiles.push(action.payload);
    },
    deselectAll: (state) => {
      state.selectedTiles = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(revealTileAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(revealTileAction.fulfilled, (state, action) => {
        let foundTiles: { [key: number]: Tile } = {};

        action.payload.tiles.forEach((payloadTile) => {
          const index = state.tiles.findIndex(
            (tile) =>
              tile.col === payloadTile.col && tile.row === payloadTile.row
          );

          if (index !== -1) {
            foundTiles[index] = payloadTile;
          }
        });

        state.tiles = state.tiles.map((tile, index) => {
          if (foundTiles[index]) {
            return foundTiles[index];
          }
          return tile;
        });

        state.selectedTiles = [];
        state.round = action.payload.round;
        state.gameStatus = action.payload.status;
        state.isLoading = false;
      })
      .addCase(revealTileAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(getScoresAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScoresAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.scoreboard = action.payload.scores;
      })
      .addCase(getScoresAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(getCurrentGameAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentGameAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gameId = action.payload.gameId;
        state.tiles = action.payload.tiles;
        state.gameStatus = action.payload.gameStatus;
        state.round = action.payload.round;
      })
      .addCase(getCurrentGameAction.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const selectTiles = (state: RootState) => state.game.tiles;

export const selectSelectedTiles = (state: RootState) =>
  state.game.selectedTiles;

export const selectCurrentRound = (state: RootState) => state.game.round;

export const selectGameId = (state: RootState) => state.game.gameId;

export const selectGameError = (state: RootState) => state.game.error;

export const selectGameLoading = (state: RootState) => state.game.isLoading;

export const selectGameStatus = (state: RootState) => state.game.gameStatus;

export const selectScoreboard = (state: RootState) => state.game.scoreboard;

export const { toggleTile, deselectAll } = gameSlice.actions;

export default gameSlice.reducer;
