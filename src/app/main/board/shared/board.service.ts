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
      Authorization: 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..UsK8CxgoIEhrjwEp.h_0n1pkbBj5sMve73Ps9GQFfdRVQVyqMSZMMc4MWbCQlFwPl9FeMOf_xNhHhRNrIDKP0l6E-VHaSJrcy1-glNWZtt54cQaeip20o__653hmgb_bcdhXS4XO6g7xErGXOOW2uK_ZTxJ7oiNzBckZgSQ6bL7aufZiVAqfyphDn-iDs2Fa4j51TAT8xOqzs1dZNa2Jb6lot6oN6VMjJOtbSkz3ujWPjliK3jhVb32M8UU6oKEgFddJ4489Mv9WZo81q.LxovC4LCPMd2Cn0TOetuWw'
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

  readBoards(token: string): Observable<any> {
    console.log(token);
    const httpOption = {
      headers: new HttpHeaders(
        {
          'accept-language': 'ko',
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `${token}`
        }
      )
    }
    return this.http.get<any>(this.boardUrl, httpOption);
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

