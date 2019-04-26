import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMenuService {
  private loginmenuUrl = 'https://13.124.52.53:8080/i18ns/entry?';
  locale = 'ko';

  constructor(private http: HttpClient) {
  }

  readLoginMenu(param: string, locale: string = 'ko'): Observable<any> {
    this.locale = locale;
    const httpOptions = {
      headers: new HttpHeaders(
        {'accept-language': `${this.locale}`}
      )
    };
    const url = `${this.loginmenuUrl}` + `${param}`;
    return this.http.get<any>(url, httpOptions);
  }
}
