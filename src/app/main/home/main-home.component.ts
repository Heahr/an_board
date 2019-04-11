import {Component, OnInit} from '@angular/core';

import {MainService} from '../shared/main.service';
import {Language} from '../shared/language';
import {LoginService} from '../../login/shared/login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  nation: string = navigator.language.substr(0, 2);

  Languages: Language[];
  id: string = '';

  constructor(private mainService: MainService,
              private loginService: LoginService, ) {
  }

  ngOnInit() {
    this.sendLanguage(this.nation);
    this.getLanguagelist();
    this.loginService.getLoginid().subscribe(id => this.id = id);
  }

  getLanguagelist(): void {
    this.mainService.getLanguagelist().subscribe(Languages => this.Languages = Languages);
  }

  sendLanguage(nation: string): void {
    setTimeout(() => {this.mainService.sendLanguage(nation); }, 600);
  }

}