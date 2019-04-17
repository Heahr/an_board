import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-board',
  templateUrl: './delete-board.component.html',
  styleUrls: ['./delete-board.component.css']
})
export class DeleteBoardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteBoardComponent>) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
