import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';

import {Language} from './language';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private subject = new Subject<string>();
  //private languageUrl = 'http://localhost:3000/language';

  constructor(private http: HttpClient) {
  }

  getLanguage(): Observable<string> {
    return this.subject.asObservable();
  }

  // getLanguagelist(): Observable<Language[]> {
  //   return this.http.get<Language[]>(this.languageUrl);
  // }

  sendLanguage(language: string) {
    return this.subject.next(language);
  }

}
