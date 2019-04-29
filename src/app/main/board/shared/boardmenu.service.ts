import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BoardMenuService {
  private boardMenuUrl = 'https://13.124.52.53:8080/i18ns/entry?i18nIds='
  locale = '';

  constructor(private http: HttpClient) {
  }

  readBoardMenu(param: string, locale: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {'accept-language': `${locale}`}
      )
    }
    const url = `${this.boardMenuUrl}` + `${param}`;
    return this.http.get<any>(url, httpOptions);
  }
}
