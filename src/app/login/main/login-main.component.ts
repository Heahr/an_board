import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  setLoginid(id: string): void {
    setTimeout(() => {this.loginService.setLoginid(id); }, 100);
  }
}
