import {GameSessions} from './game-sessions.model';
import * as GameSessionsActions from './game-sessions.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {addGameSession} from './game-sessions.actions';

export const gameSessionFeatureKey = 'gameSession';

export interface GameSessionsState {
  gameSessions: GameSessions;
}

export const initialState: GameSessionsState = {
  gameSessions: {list: [], preferred: null}
};

const gameSessionsReducer = createReducer(
  initialState,
  on(GameSessionsActions.loadGameSessions, state => state),
  on(GameSessionsActions.addGameSession, (state, { newGameSession}) => {
    return {
      ...state,
      gameSessions: {
        ...state.gameSessions,
        list: [...state.gameSessions.list, newGameSession]
      }
    };
  })
);

export function reducer(state: GameSessionsState | undefined, action: Action) {
  return gameSessionsReducer(state, action);
}
