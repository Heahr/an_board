import { Injectable } from '@angular/core';
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
export class LanguagemenuService {
  private languagemenuUrl = 'https://13.124.52.53:8080/locales';

  constructor() { }
}
