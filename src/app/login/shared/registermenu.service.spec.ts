import { TestBed } from '@angular/core/testing';

import { RegisterMenuService } from './registermenu.service';

describe('RegisterMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterMenuService = TestBed.get(RegisterMenuService);
    expect(service).toBeTruthy();
  });
});
