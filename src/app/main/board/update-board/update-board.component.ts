import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable, Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {Updateboard} from '../shared/updateboard';
import {BoardService} from '../shared/board.service';

@Component({
  selector: 'app-update-board',
  templateUrl: './update-board.component.html',
  styleUrls: ['./update-board.component.css']
})
export class UpdateBoardComponent implements OnInit, OnDestroy {
  board: any;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private boardService: BoardService,
              private location: Location) {
  }

  id: number;
  changeBoard: Updateboard = {} as Updateboard;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(this.readBoard(this.id).subscribe(board => this.board = board));
  }

  readBoard(id): Observable<Board> {
    return this.boardService.readBoard(id);
  }

  updateBoard(): void {
    this.changeBoard.subject = this.board.result.subject;
    this.changeBoard.content = this.board.result.content;
    this.subscriptions.push(this.boardService.updateBoard(this.changeBoard, this.id).subscribe(() => this.goBack()));
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
