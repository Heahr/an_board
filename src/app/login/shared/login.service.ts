import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject<string>();

  constructor() {
  }

  getLoginid(): Observable<string> {
    return this.subject.asObservable();
  }

  setLoginid(id: string) {
    return this.subject.next(id);
  }
}
