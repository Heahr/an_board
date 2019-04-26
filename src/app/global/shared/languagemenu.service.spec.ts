import { TestBed } from '@angular/core/testing';

import { LanguageMenuService } from './languagemenu.service';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('LanguageMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageMenuService = TestBed.get(LanguageMenuService);
    expect(service).toBeTruthy();
  });
});
