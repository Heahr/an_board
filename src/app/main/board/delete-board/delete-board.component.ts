import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-board',
  templateUrl: './delete-board.component.html',
  styleUrls: ['./delete-board.component.css']
})
export class DeleteBoardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteBoardComponent>) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
