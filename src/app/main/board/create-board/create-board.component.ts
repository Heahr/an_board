import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs/index';

import {Updateboard} from '../shared/updateboard';
import {BoardService} from '../shared/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit, OnDestroy {
  createboard: Updateboard = {} as Updateboard;
  private subscriptions: Subscription[] = [];

  constructor(private boardService: BoardService,
              private location: Location) {
  }

  ngOnInit() {
  }

  createBoard(): void {
    this.subscriptions.push(this.boardService.createBoard(this.createboard).subscribe(() => this.goBack()));
  }

  onSubmit() {
    this.createBoard();
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
