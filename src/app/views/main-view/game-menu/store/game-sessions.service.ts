import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as GameSessionsActions from './game-sessions.actions';
import {GameSession, GameSessions} from './game-sessions.model';
import {Observable} from 'rxjs';
import * as GameSessionsSelector from './game-sessions.selectors';

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

  public getGameSessionsList$(): Observable<GameSession[]> {
    return this.store.select(GameSessionsSelector.getGameSessionsList);
  }

  public getPreferredGameSession$(): Observable<string> {
    return this.store.select(GameSessionsSelector.getPreferredGameSession);
  }

}

