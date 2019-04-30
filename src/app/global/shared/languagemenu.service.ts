import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageMenuService {
  private subject = new Subject<string>();
  locale = '';

  constructor() {
  }

  getLocale(): Observable<string> {
    return this.subject.asObservable();
  }

  sendLocale(locale: string) {
    if (locale === '') {
      return this.subject.next(this.locale);
    } else {
      this.locale = locale;
      return this.subject.next(locale);
    }
  }
}
