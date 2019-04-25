import { TestBed } from '@angular/core/testing';

import { LoginMenuService } from './loginmenu.service';

describe('LoginMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginMenuService = TestBed.get(LoginMenuService);
    expect(service).toBeTruthy();
  });
});
