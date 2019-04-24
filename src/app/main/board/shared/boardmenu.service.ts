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
export class BoardmenuService {
  private boardMenuUrl = 'https://13.124.52.53:8080/i18ns/entry?i18nIds=BOARD_CONTENT,BOARD_DELETE,BOARD_TITLE,BOARD_DATE,BORAD_CREATE,BOARD_SUBJECT,BOARD_LOGOUT'

  constructor(private http: HttpClient) {
  }

  readBoardMenu(): Observable<any> {
    return this.http.get<any>(this.boardMenuUrl, httpOptions);
  }
}
