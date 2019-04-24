import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {BoardService} from '../shared/board.service';
import {MainService} from '../../shared/main.service';
import {Language} from '../../shared/language';
import {PagerService} from '../shared/pager.service';
import {DeleteBoardComponent} from '../delete-board/delete-board.component';

import {BoardmenuService} from '../shared/boardmenu.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  boards: any[];
  currentPage = 1;

  displayedColumns: string[] = ['id', 'subject', 'date', 'delete'];
  language: Language = {} as Language;
  languages: Language[];

  pageslice = 10;
  pager: any = {};
  pagedItems: Board[];

  boardmenus: any = {};

  constructor(private boardService: BoardService,
              private mainService: MainService,
              private pagerService: PagerService,
              private boardmenuService: BoardmenuService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.boardmenus = this.route.snapshot.data['boardmenu'];
    this.subscriptions.push(this.readBoards()
      .subscribe(boards => {
        console.log(boards);
        this.boards = boards.result.content.sort((a, b) => b.updatedDate - a.updatedDate);
        this.setPage(this.currentPage);
      }));
  }

  readBoards() {
    return this.boardService.readBoards();
  }

  deleteBoard(board: Board): any {
    return this.subscriptions.push(this.boardService.deleteBoard(board).subscribe(() => {
      this.readBoards().subscribe(boards => {
        this.boards = boards.sort((a, b) => b.date - a.date);
        this.setPage(this.currentPage);
      });
    }));
  }

  openDialog(board: Board): void {
    const dialogRef = this.dialog.open(DeleteBoardComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteBoard(board);
      }
    });
  }

  setPage(page: number, slice: number = 10) {
    this.pageslice = slice;
    this.currentPage = page;
    this.pager = this.pagerService.getPager(this.boards.length, page, slice);
    this.pagedItems = this.boards.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
