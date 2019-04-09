import { Component, OnInit } from '@angular/core';

import { MainService } from './shared/main.service';
import {Language} from './shared/language';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  nation: string = navigator.language.substr(0, 2);

  Languages: Language[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.sendLanguage(this.nation);
    this.getLanguagelist();
  }

  sendLanguage(nation: string): void {
    this.mainService.sendLanguage(nation);
  }

  getLanguagelist(): void {
    this.mainService.getLanguagelist().subscribe(Languages => this.Languages = Languages);
  }
}
