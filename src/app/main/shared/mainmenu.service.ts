import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders(
    {'accept-language': 'ko'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private mainmenuUrl = 'https://13.124.52.53:8080/i18ns/entry?i18nIds=';

  constructor(private http: HttpClient) {
  }

  readMainMenu(param: string): Observable<any> {
    const url = `${this.mainmenuUrl}` + `${param}`
    return this.http.get<any>(url, httpOptions);
  }
}
