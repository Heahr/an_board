import { TestBed } from '@angular/core/testing';

import { BoardmenuService } from './boardmenu.service';

describe('BoardmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardmenuService = TestBed.get(BoardmenuService);
    expect(service).toBeTruthy();
  });
});
