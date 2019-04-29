import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'accept-language': 'ko',
      Accept: 'application/json',
      'content-type': 'application/json',
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject<string>();
  private loginUrl = 'https://13.124.52.53:8080/members/login';

  constructor(private http: HttpClient) {
  }

  getLoginid(): Observable<string> {
    return this.subject.asObservable();
  }

  setLoginid(token: string) {
    return this.subject.next(token);
  }

  setToken(login: any): Observable<any> {
    return this.http.post(this.loginUrl, login, httpOptions);
  }
}
