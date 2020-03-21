import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Room {
  room: string;
}

@Component({
  selector: 'app-dialog-new-game',
  templateUrl: './dialog-new-game.component.html',
  styleUrls: ['./dialog-new-game.component.css']
})
export class DialogNewGameComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogNewGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Room) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
