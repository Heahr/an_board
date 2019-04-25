import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders(
    {'accept-language': 'ko'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class RegisterMenuService {
  private registermenuUrl = 'https://13.124.52.53:8080/i18ns/entry?';

  constructor(private http: HttpClient) {
  }

  readRegisterMenu(param: string): Observable<any> {
    const url = `${this.registermenuUrl}` + `${param}`;
    return this.http.get<any>(url, httpOptions);
  }
}
