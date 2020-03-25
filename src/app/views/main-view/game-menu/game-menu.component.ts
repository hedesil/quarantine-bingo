import {Component, OnInit} from '@angular/core';
import {DialogNewPlayerComponent} from '../player-menu/dialog-new-player/dialog-new-player.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogNewGameComponent} from './dialog-new-game/dialog-new-game.component';
import {GameSessionsService} from './store/game-sessions.service';
import {GameSession} from './store/game-sessions.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent implements OnInit {
  public rooms = [];
  public room;
  public gameSessionsList$: Observable<GameSession[]>;
  public preferredGameSession$: Observable<string>;

  constructor(public dialog: MatDialog, private gameSessionsService: GameSessionsService) {
  }

  ngOnInit(): void {
    this.gameSessionsService.loadGameSessions();
    this.gameSessionsList$ = this.gameSessionsService.getGameSessionsList$();
    this.preferredGameSession$ = this.gameSessionsService.getPreferredGameSession$();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewGameComponent, {
      width: '250px',
      data: {room: this.room}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.room = result;
      const session: GameSession = {
        id: this.room
      };
      this.gameSessionsService.addGameSession(session);
    });
  }
}
