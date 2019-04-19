import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Board} from './board';
import {parseHttpResponse} from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private boardUrl = 'http://localhost:3000/boardList';

  constructor(private http: HttpClient) {
  }

  createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardUrl, board, httpOptions);
  }

  readBoard(id: number): Observable<Board> {
    const url = `${this.boardUrl}/${id}`;
    return this.http.get<Board>(url);
  }

  readBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl);
  }

  updateBoard(board: Board): Observable<any> {
    return this.http.put(this.boardUrl + `/${board.id}`, board, httpOptions);
  }

  deleteBoard(board: Board | number): Observable<Board> {
    const id = typeof board === 'number' ? board : board.id;
    const url = `${this.boardUrl}/${id}`;

    return this.http.delete<Board>(url, httpOptions);
  }
}

