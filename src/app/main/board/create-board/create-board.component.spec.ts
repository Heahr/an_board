import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoardComponent } from './create-board.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'jasmine';

describe('CreateBoardComponent', () => {
  let component: CreateBoardComponent;
  let fixture: ComponentFixture<CreateBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
