import {Component, OnInit} from '@angular/core';

import {MainService} from '../shared/main.service';
import {LoginService} from '../../login/shared/login.service';

import {ActivatedRoute} from '@angular/router';
import {MainMenuService} from '../shared/mainmenu.service';
import {LanguageMenuService} from '../../global/shared/languagemenu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  id: string = '';

  Labels: any = {
    BOARD_TITLE: '',
    BOARD_LOGOUT: ''
  };

  languages: any[] = [
    {locale: 'ko', name: '한국어'},
    {locale: 'en', name: 'English'}
  ];

  constructor(private mainService: MainService,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private mainMenuService: MainMenuService,
              private languageMenuService: LanguageMenuService) {
  }

  ngOnInit() {
    this.languageMenuService.getLocale().subscribe(value =>
      this.mainMenuService.readMainMenu(Object.keys(this.Labels).join(','), value)
        .subscribe(res => {
          this.Labels = res.result;
        })
    )
    this.sendLocale('');
  }

  sendLocale(locale: string) {
    return this.languageMenuService.sendLocale(locale);
  }
}
