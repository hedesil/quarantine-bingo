import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Name {
  name: string;
}

@Component({
  selector: 'app-dialog-new-player',
  templateUrl: './dialog-new-player.component.html',
  styleUrls: ['./dialog-new-player.component.css']
})
export class DialogNewPlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogNewPlayerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Name) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
