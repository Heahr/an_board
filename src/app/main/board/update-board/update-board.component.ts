import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable, Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {BoardService} from '../shared/board.service';

@Component({
  selector: 'app-update-board',
  templateUrl: './update-board.component.html',
  styleUrls: ['./update-board.component.css']
})
export class UpdateBoardComponent implements OnInit, OnDestroy {
  board: Board;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private boardService: BoardService,
              private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(this.readBoard(id).subscribe(board => this.board = board));
  }

  readBoard(id): Observable<Board> {
    return this.boardService.readBoard(id);
  }

  updateBoard(): void {
    this.board.date = Date.now();
    this.subscriptions.push(this.boardService.updateBoard(this.board).subscribe(() => this.goBack()));
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.updateBoard();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
