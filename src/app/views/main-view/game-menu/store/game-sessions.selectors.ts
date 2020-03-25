import {createFeatureSelector, createSelector} from '@ngrx/store';
import {gameSessionFeatureKey, GameSessionsState} from './game-sessions.reducer';

export const getGameSessionsState = createFeatureSelector<GameSessionsState>(
  gameSessionFeatureKey
);

export const getGameSessionsList = createSelector(
  getGameSessionsState,
  (state: GameSessionsState) => state.gameSessions.list
);

export const getPreferredGameSession = createSelector(
  getGameSessionsState,
  (state: GameSessionsState) => state.gameSessions.preferred
);
