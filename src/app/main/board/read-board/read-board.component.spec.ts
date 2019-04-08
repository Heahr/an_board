import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBoardComponent } from './read-board.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('ReadBoardComponent', () => {
  let component: ReadBoardComponent;
  let fixture: ComponentFixture<ReadBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
