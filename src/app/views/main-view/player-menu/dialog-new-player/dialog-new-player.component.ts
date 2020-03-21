import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-new-player',
  templateUrl: './dialog-new-player.component.html',
  styleUrls: ['./dialog-new-player.component.css']
})
export class DialogNewPlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogNewPlayerComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
