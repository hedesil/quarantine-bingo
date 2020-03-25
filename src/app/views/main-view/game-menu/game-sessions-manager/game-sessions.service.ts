import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as GameSessionsActions from './game-sessions.actions';
import {GameSession, GameSessions} from './game-sessions.model';

@Injectable({
  providedIn: 'root'
})
export class GameSessionsService {
  constructor(private store: Store<GameSessions>) {
  }

  public loadGameSessions() {
    this.store.dispatch(
      GameSessionsActions.loadGameSessions()
    );
  }

  public addGameSession(newGameSession: GameSession) {
    this.store.dispatch(
      GameSessionsActions.addGameSession({
        newGameSession: {...newGameSession}
      })
    );
  }

  public selectGameSession(preferredSessionId: string) {
    this.store.dispatch(
      GameSessionsActions.selectGameSession({preferredSessionId})
    );
  }

}

