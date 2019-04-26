import {Component, OnInit} from '@angular/core';

import {MainService} from '../shared/main.service';
import {Language} from '../shared/language';
import {LoginService} from '../../login/shared/login.service';

import {ActivatedRoute} from '@angular/router';
import {MainMenuService} from '../shared/mainmenu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  nation: string = navigator.language.substr(0, 2);

  id: string = '';

  data: any;

  Labels: any = {
    BOARD_TITLE: '',
    BOARD_LOGOUT: ''
  };

  languages: any[] = [
    {value: '한국어'},
    {value: 'English'}
  ];

  constructor(private mainService: MainService,
              private loginService: LoginService,
              private route: ActivatedRoute,
  private mainMenuService: MainMenuService) {
  }

  ngOnInit() {
    this.mainMenuService.readMainMenu(Object.keys(this.Labels).join(','))
      .subscribe(res => {
        this.Labels = res.result;
      });
    this.data = this.route.snapshot.data;
    this.sendLanguage(this.nation);
    this.loginService.getLoginid().subscribe(id => this.id = id);
  }

  // getLanguagelist(): void {
  //   this.mainService.getLanguagelist().subscribe(Languages => this.Languages = Languages);
  // }

  sendLanguage(nation: string): void {
    setTimeout(() => {
      this.mainService.sendLanguage(nation);
    }, 600);
  }

}
