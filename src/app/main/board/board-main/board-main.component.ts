import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';

import {Board} from '../shared/board';
import {BoardService} from '../shared/board.service';
import {MainService} from '../../shared/main.service';
import {Language} from '../../shared/language';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.css']
})
export class BoardMainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  boards: Board[];

  language: Language;
  languages: Language[];


  constructor(private boardService: BoardService,
              private mainService: MainService) {
  }

  ngOnInit() {
    this.getLanguagelist();
    this.subscriptions.push(this.mainService.getLanguage().subscribe(
      language => this.language = this.languages.find((value) => value.id === language)));
    this.subscriptions.push(this.readBoards().subscribe(boards => this.boards = boards));
  }

  getLanguagelist(): void {
    this.mainService.getLanguagelist().subscribe(languages => this.languages = languages);
  }

  readBoards() {
    return this.boardService.readBoards();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription, index, array) => subscription.unsubscribe());
  }

  check() {
    console.log(this.language);
  }
}



