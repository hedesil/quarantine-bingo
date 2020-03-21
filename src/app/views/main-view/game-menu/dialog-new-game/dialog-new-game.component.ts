import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-new-game',
  templateUrl: './dialog-new-game.component.html',
  styleUrls: ['./dialog-new-game.component.css']
})
export class DialogNewGameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogNewGameComponent>) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
