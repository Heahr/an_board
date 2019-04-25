import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable, Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {BoardService} from '../shared/board.service';

@Component({
  selector: 'app-read-board',
  templateUrl: './read-board.component.html',
  styleUrls: ['./read-board.component.css']
})
export class ReadBoardComponent implements OnInit, OnDestroy {
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

  // deleteBoard(board: Board): void {
  //   this.subscriptions.push(this.boardService.deleteBoard(board).subscribe(() => this.goBack()));
  // }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
