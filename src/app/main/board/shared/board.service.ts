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
      Authorization: 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..PPLXvRgQkCoR3WIm.wcB_rre_QwoTY_pdO' +
      '-0sW_epq21air-BtFN66ysO_wp99qOrmwuQf0we8jpO5Xg6X04cVM125MLTSFQMND_gF8V9iPYLWtodB5Amw0ESP4wOhefA1xq-rAXlittkn9On-6' +
      '0jYiShwRolJ-W_Orifz09bCUYqwaWsMAQ-CNecUxEe2mcKj4WK_c01TVmusViOrs6fOJtnHxJaZhNhe63LoSZ58F7plDp_348Oy5zn8T_lrlVsL9F' +
      'QJbkCQcgVTaxb.Ilp3IiwAmL4hb1W6oOx5AA'
    }
  )
};

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  size = 10;
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
    const url = `${this.boardUrl}/${key}` + '?reason=for delete';
    console.log(url);

    return this.http.delete<any>(url, httpOptions);
  }
}

