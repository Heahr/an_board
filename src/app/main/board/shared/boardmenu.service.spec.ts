import { TestBed } from '@angular/core/testing';

import { BoardMenuService } from './boardmenu.service';

describe('BoardMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardMenuService = TestBed.get(BoardMenuService);
    expect(service).toBeTruthy();
  });
});
