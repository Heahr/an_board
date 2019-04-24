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
      Authorization: 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..EeXo8cT-viOUkbcP.bZ0UUw6mENfR2z62YUl' +
      'qGIswOZM0udxk54baY4pgFZSTs4cCgsHhNZrnUMn_HBgoledYpYNc5sE2YA1eZ084CL61gl05oMsEdQF2qBLJj-TNAvtegep3CkEA-Ftz4IlslWFOrN' +
      'ewdDZdZpBTqVk2XIyxBbhax7Edl1K795VlF0Qbia1jXjOMcZx_u09o4Cj0koBmrpjAyhGUwuUoUyBeQ7r-BE28IBstAzBtp3C5j6UQUQyWCm358yO60' +
      'q_sXNCj.6t3JetPiuRzJKWUbqGxu3A'
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

  createBoard(board: Board): Observable<any> {
    return this.http.post<any>(this.boardUrl, board, httpOptions);
  }

  slicereadBoards(page: number, size: number) {
    const url = this.boardUrl + '?page=' + `${page}` + '&size=' + `${size}`;
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

  deleteBoard(board: Board | number): Observable<Board> {
    const id = typeof board === 'number' ? board : board.id;
    const url = `${this.boardUrl}/${id}`;

    return this.http.delete<Board>(url, httpOptions);
  }
}

