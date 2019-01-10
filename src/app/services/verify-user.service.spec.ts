import { TestBed } from '@angular/core/testing';

import { VerifyUserService } from './verify-user.service';

describe('VerifyUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyUserService = TestBed.get(VerifyUserService);
    expect(service).toBeTruthy();
  });
});
