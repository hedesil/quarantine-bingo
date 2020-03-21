import {Component, OnInit} from '@angular/core';
import {DialogNewPlayerComponent} from './dialog-new-player/dialog-new-player.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-player-menu',
  templateUrl: './player-menu.component.html',
  styleUrls: ['./player-menu.component.css']
})
export class PlayerMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewPlayerComponent, {
      width: '250px',
      data: {}
    });
  }
}
