import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/login.service';
import {ActivatedRoute} from '@angular/router';
import {LoginMenuService} from '../shared/loginmenu.service';

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

  constructor(private loginService: LoginService,
              private loginMenuService: LoginMenuService) {
  }

  ngOnInit() {
    this.loginMenuService.readLoginMenu(Object.keys(this.labels).join(','))
      .subscribe(res => {
        this.labels = res.result;
      });
  }

  setLoginid(id: string): void {
    setTimeout(() => {
      this.loginService.setLoginid(id);
    }, 100);
  }
}
