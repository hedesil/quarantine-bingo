import { Component, OnInit } from '@angular/core';
import {GameSessionsService} from '../views/main-view/game-menu/game-sessions-manager/game-sessions.service';
import {GameSession} from '../views/main-view/game-menu/game-sessions-manager/game-sessions.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameSessionsService: GameSessionsService) { }

  ngOnInit(): void {
    this.gameSessionsService.loadGameSessions();
    const session: GameSession = {
      id: '1'
    };
    this.gameSessionsService.addGameSession(session);
  }

}
