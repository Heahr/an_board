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
export class LoginMenuService {
  private loginmenuUrl = 'https://13.124.52.53:8080/i18ns/entry?';

  constructor(private http: HttpClient) {
  }

  readLoginMenu(param: string): Observable<any> {
    const url = `${this.loginmenuUrl}` + `${param}`
    return this.http.get<any>(url, httpOptions);
  }
}
