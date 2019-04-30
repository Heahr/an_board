import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Updateboard} from './updateboard';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'accept-language': 'ko',
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..FiQ7q81DiHUzw8dU.cZaKs0yYKiRYDX2zj' +
      'FWdkQ5gwN193vbouq7Ppy_VY-Ejz9nQEaBQzoNiYk8JkvxZvGFzYZeUxc3zTRlPhNN-4SNQu_Ci5Gj6-orfCXe65rWvHjKn6V2qJdrj8to6I_lLgn' +
      'bXrCPQQcmRQY-Wodqb4bXbpPHWfHt4SIr9KExH_oKRcPu4BjP30vurrxMSZRtHG1rq5COyJ9Ighqg7rRp-OuTYhgVbDxbgqXku87rYeRvB7LUDRG2' +
      'IWCIz_qxceDQB.XCifPRi2HK8H8QOfpzoW8w'
    }
  )
};


@Injectable({
  providedIn: 'root'
})

export class BoardService{
  private boardUrl = 'https://13.124.52.53:8080/boards';
  token = '';

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
    if (token !== '') {
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
    } else {
      return this.http.get<any>(this.boardUrl, httpOptions);
    }
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

