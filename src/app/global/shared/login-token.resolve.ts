import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {LoginService} from '../../login/shared/login.service';

@Injectable()
export class LoginTokenResolve implements Resolve<any> {
  token = '';

  constructor(private loginService: LoginService) {
  }

  resolve() {
    this.loginService.getLoginid().subscribe(res => this.token = res);
    console.log(this.token);
    return this.token;
  }
}
