import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardComponent } from './delete-board.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'selenium-webdriver/testing';

describe('DeleteBoardComponent', () => {
  let component: DeleteBoardComponent;
  let fixture: ComponentFixture<DeleteBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
