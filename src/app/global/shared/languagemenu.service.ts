import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {'accept-language': 'ko'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class LanguageMenuService {
  private subject = new Subject<string>();
  private languagemenuUrl = 'https://13.124.52.53:8080/locales';
  locale = '';

  constructor(private http: HttpClient) {
  }

  getLocale(): Observable<string> {
    return this.subject.asObservable();
  }

  sendLocale(locale: string) {
    return this.subject.next(locale);
  }

  getLocales(): Observable<any> {
    return this.http.get<any>(this.languagemenuUrl, httpOptions);
  }
}
