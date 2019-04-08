import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';

import { Board } from '../shared/board';
import { BoardService } from '../shared/board.service';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit, OnDestroy {
  boards: Board[];
  private subscriptions: Subscription[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.subscriptions.push(this.readBoards().subscribe(boards => this.boards = boards));
  }

  readBoards() {
    return this.boardService.readBoards();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}



