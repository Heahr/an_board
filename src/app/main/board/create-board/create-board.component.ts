import { Component, OnInit, OnDestroy } from '@angular/core';
import {Board} from '../shared/board';
import {Subscription} from 'rxjs/index';
import {BoardService } from '../shared/board.service';
import {Location } from '@angular/common';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit, OnDestroy {
  board: Board = {} as Board;
  private subscriptions: Subscription[] = [];

  constructor(
    private boardService: BoardService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  createBoard(): void {
    this.subscriptions.push(this.boardService.createBoard(this.board).subscribe(() => this.location.back()));
  }

  onSubmit() {
    this.createBoard();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
