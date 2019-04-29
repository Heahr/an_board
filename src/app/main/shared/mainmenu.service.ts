import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private mainmenuUrl = 'https://13.124.52.53:8080/i18ns/entry?i18nIds=';
  locale = '';

  constructor(private http: HttpClient) {
  }

  readMainMenu(param: string, locale: string): Observable<any> {
    this.locale = locale;
    const httpOptions = {
      headers: new HttpHeaders(
        {'accept-language': `${this.locale}`}
      )
    };
    const url = `${this.mainmenuUrl}` + `${param}`
    return this.http.get<any>(url, httpOptions);
  }
}
