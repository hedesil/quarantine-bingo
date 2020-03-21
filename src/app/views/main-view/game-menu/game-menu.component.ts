import {Component, OnInit} from '@angular/core';
import {DialogNewPlayerComponent} from '../player-menu/dialog-new-player/dialog-new-player.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogNewGameComponent} from './dialog-new-game/dialog-new-game.component';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent implements OnInit {
  public rooms = [];
  public room;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewGameComponent, {
      width: '250px',
      data: {room: this.room}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.room = result;
    });
  }
}
