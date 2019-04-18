import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {BoardService} from '../shared/board.service';
import {MainService} from '../../shared/main.service';
import {Language} from '../../shared/language';
import {PagerService} from '../shared/pager.service';
import {DeleteBoardComponent} from '../delete-board/delete-board.component';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  boards: Board[];

  displayedColumns: string[] = ['id', 'subject', 'date', 'delete'];
  language: Language = {} as Language;
  languages: Language[];

  pager: any = {};
  pagedItems: Board[];


  constructor(private boardService: BoardService,
              private mainService: MainService,
              private pagerService: PagerService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getLanguagelist();
    this.subscriptions.push(this.mainService.getLanguage().subscribe(
      language => this.language = this.languages.find((value) => value.id === language)));
    this.subscriptions.push(this.readBoards().subscribe(boards => {this.boards = boards; this.setPage(1); }));
  }

  getLanguagelist(): void {
    this.mainService.getLanguagelist().subscribe(languages => this.languages = languages);
  }

  readBoards() {
    return this.boardService.readBoards();
  }

  deleteBoard(board: Board): void {
    this.subscriptions.push(this.boardService.deleteBoard(board).subscribe());
    this.readBoards();
    this.subscriptions.push(this.readBoards().subscribe(boards => {this.boards = boards; this.setPage(1); }));
  }

  openDialog(board: Board): void {
    const dialogRef = this.dialog.open(DeleteBoardComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.deleteBoard(board);
      }
    });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.boards.length, page);
    this.pagedItems = this.boards.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
