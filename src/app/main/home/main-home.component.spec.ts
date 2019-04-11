import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeComponent } from './main-home.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('MainHomeComponent', () => {
  let component: MainHomeComponent;
  let fixture: ComponentFixture<MainHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
