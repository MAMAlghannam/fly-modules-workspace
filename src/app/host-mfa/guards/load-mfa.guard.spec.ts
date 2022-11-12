import { TestBed } from '@angular/core/testing';

import { LoadMfaGuard } from './load-mfa.guard';

describe('LoadMfaGuard', () => {
  let guard: LoadMfaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadMfaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
