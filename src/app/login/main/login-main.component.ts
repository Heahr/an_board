import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/login.service';
import {LoginMenuService} from '../shared/loginmenu.service';
import {LanguageMenuService} from '../../global/shared/languagemenu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  labels: any = {
    LOGIN_TITLE: '',
    LOGIN_REGISTER: '',
    LOGIN_ID: '',
    LOGIN_PASSWORD: '',
    LOGIN_SIGN_IN: '',
    WARNING_CONTENT: '',
    LOGIN_INVALID_MEMBER: '',
    REQUIRED_PARAMETER: ''
  };

  languages: any[] = [
    {value: 'ko'},
    {value: 'en'}
  ];

  constructor(private loginService: LoginService,
              private loginMenuService: LoginMenuService,
              private languageMenuService: LanguageMenuService) {
  }

  ngOnInit() {
    this.languageMenuService.getLocale().subscribe(value =>
      this.loginMenuService.readLoginMenu(Object.keys(this.labels).join(','), value)
        .subscribe(res => {
          this.labels = res.result;
        })
    )
    this.sendLocale('');
  }

  sendLocale(locale: string) {
    this.languageMenuService.sendLocale(locale);
  }

  setLoginid(id: string): void {
    setTimeout(() => {
      this.loginService.setLoginid(id);
    }, 100);
  }

  test(value: string): void {
    return console.log(value);
  }
}
