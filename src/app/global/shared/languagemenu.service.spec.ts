import { TestBed } from '@angular/core/testing';

import { LanguagemenuService } from './languagemenu.service';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('LanguagemenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguagemenuService = TestBed.get(LanguagemenuService);
    expect(service).toBeTruthy();
  });
});
