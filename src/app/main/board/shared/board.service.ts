import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Board} from './board';
import {Updateboard} from './updateboard';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'accept-language': 'ko',
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..Evj492pVV-xkKd3G.EMNVSy7mmleKFie_H' +
      'i56TQQp7_ej_MgXGx3h-M-aLoe29pvLVCn3PsdH6XGodiK-R1wmT2Zl_5jtPcv7U0U3DOivmbwcXS1KHOoLi5TTJ_98fuo0IIWuTfD9ha20Oa4P8g' +
      '4CH7rUiMjsfUi0Lx9oFqc-NFYyxsKr3Xb5lGow_mOHVwT-TfgTMjTZ9589IDDQs0BQBBGH_A0nFDxCdVSjItTKUsKs186Cjbuob6uuyhhhK7JgQ1t' +
      'PrfemuMuXJvqy.cEP6DC9irm_x6oICk-McPw'
    }
  )
};


@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private boardUrl = 'https://13.124.52.53:8080/boards';

  constructor(private http: HttpClient) {
  }

  createBoard(board: Updateboard): Observable<any> {
    return this.http.post<any>(this.boardUrl, board, httpOptions);
  }

  slicereadBoards(page: number, size: number): Observable<any> {
    const url = this.boardUrl + '?page=' + `${page}` + '&size=' + `${size}`;
    console.log(url);
    return this.http.get<any>(url, httpOptions);
  }

  readBoard(id: number): Observable<any> {
    const url = `${this.boardUrl}/${id}`;
    return this.http.get<any>(url, httpOptions);
  }

  readBoards(): Observable<any> {
    return this.http.get<any>(this.boardUrl, httpOptions);
  }

  updateBoard(board: Updateboard, key: number): Observable<any> {
    return this.http.put(this.boardUrl + `/${key}`, board, httpOptions);
  }

  deleteBoard(key: number): Observable<any> {
    const url = `${this.boardUrl}/${key}?reason=for delete`;
    console.log(url);

    return this.http.delete<any>(url, httpOptions);
  }
}

