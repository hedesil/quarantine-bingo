import {createAction, props} from '@ngrx/store';
import {GameSession} from './game-sessions.model';

export const loadGameSessions = createAction(
  '[GameActions] Load Game sessions created'
);

export const addGameSession = createAction(
  '[GameActions] Add a new game session',
  props<{ newGameSession: GameSession }>()
);

export const selectGameSession = createAction(
  '[GameActions] Select a game session to join',
  props<{ preferredSessionId: string }>()
);

