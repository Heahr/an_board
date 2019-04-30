import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs/index';
import {BoardService} from '../shared/board.service';
import {Language} from '../../shared/language';
import {PagerService} from '../shared/pager.service';
import {DeleteBoardComponent} from '../delete-board/delete-board.component';

import {BoardMenuService} from '../shared/boardmenu.service';
import {LanguageMenuService} from '../../../global/shared/languagemenu.service';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../../login/shared/login.service';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  boards: any[];

  displayedColumns: string[] = ['id', 'subject', 'date', 'user', 'delete'];
  language: Language = {} as Language;
  pageslice = 10;
  currentPage = 1;
  totalpage: number;

  pager: any = {};

  Labels: any = {
    BOARD_CONTENT: '',
    BOARD_DELETE: '',
    BOARD_TITLE: '',
    BOARD_DATE: '',
    BORAD_CREATE: '',
    BOARD_SUBJECT: '',
    BOARD_LOGOUT: ''
  };

  constructor(private boardService: BoardService,
              private pagerService: PagerService,
              private boardMenuService: BoardMenuService,
              private languageMenuService: LanguageMenuService,
              private loginService: LoginService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loginService.getLoginid().subscribe(res => {
      this.readBoards(res).subscribe(boards => {
        this.boards = boards.result.content.sort((a, b) => b.updatedDate - a.updatedDate);
        this.totalpage = boards.result.totalElements;
        this.setPage(this.currentPage);
      });
    })
    this.languageMenuService.getLocale().subscribe(value =>
      this.boardMenuService.readBoardMenu(Object.keys(this.Labels).join(','), value)
        .subscribe(res => {
          this.Labels = res.result;
        })
    )
    this.subscriptions.push(this.readBoards('')
      .subscribe(boards => {
        this.boards = boards.result.content.sort((a, b) => b.updatedDate - a.updatedDate);
        this.totalpage = boards.result.totalElements;
        this.setPage(this.currentPage);
      }));
    this.sendLocale('');
  }

  sendLocale(locale: string) {
    return this.languageMenuService.sendLocale(locale);
  }

  readBoards(res: string) {
    return this.boardService.readBoards(res);
  }

  deleteBoard(key: number) {
    return this.boardService.deleteBoard(key);
    // return this.subscriptions.push(this.boardService.deleteBoard(key).subscribe(() => {
    //   this.readBoards().subscribe(boards => {
    //     this.boards = boards.sort((a, b) => b.date - a.date);
    //     this.setPage(this.currentPage);
    //   });
    // }));
  }

  openDialog(key: number): void {
    const dialogRef = this.dialog.open(DeleteBoardComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log(key);
        this.deleteBoard(key);
      }
    });
  }

  setPage(page: number, slice: number = 10) {
    this.pageslice = slice;
    this.currentPage = page;
    this.pager = this.pagerService.getPager(this.totalpage, page, slice);
    this.boardService.slicereadBoards(page - 1, slice).subscribe(boards => {
      this.boards = boards.result.content.sort((a, b) => b.updatedDate - a.updatedDate);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }
}
