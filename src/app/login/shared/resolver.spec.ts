import { Resolver } from './resolver';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('Resolver', () => {
  it('should create an instance', () => {
    expect(new Resolver()).toBeTruthy();
  });
});
