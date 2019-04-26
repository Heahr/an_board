import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class RegisterMenuService {
  private registermenuUrl = 'https://13.124.52.53:8080/i18ns/entry?';
  locale = 'ko';

  constructor(private http: HttpClient) {
  }

  readRegisterMenu(param: string, locale: string = 'ko'): Observable<any> {
    this.locale = locale;
    const httpOptions = {
      headers: new HttpHeaders(
        {'accept-language': `${this.locale}`}
      )
    };
    const url = `${this.registermenuUrl}` + `${param}`;
    return this.http.get<any>(url, httpOptions);
  }
}
