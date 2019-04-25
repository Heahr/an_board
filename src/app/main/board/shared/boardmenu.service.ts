import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {'accept-language': 'ko'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class BoardMenuService {
  private boardMenuUrl = 'https://13.124.52.53:8080/i18ns/entry?i18nIds='

  constructor(private http: HttpClient) {
  }

  readBoardMenu(param: string): Observable<any> {
    const url = `${this.boardMenuUrl}` + `${param}`;
    return this.http.get<any>(url, httpOptions);
  }
}
