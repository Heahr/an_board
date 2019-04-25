import { TestBed } from '@angular/core/testing';

import { MainMenuService } from './mainmenu.service';

describe('MainMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainMenuService = TestBed.get(MainMenuService);
    expect(service).toBeTruthy();
  });
});
