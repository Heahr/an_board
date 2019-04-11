import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {LoginService} from './login.service';

@Injectable()
export class Resolver implements Resolve<Observable<string>>{
  constructor(private loginService: LoginService) {}

  resolve() {
    return this.loginService.getLoginid();
  }
}
