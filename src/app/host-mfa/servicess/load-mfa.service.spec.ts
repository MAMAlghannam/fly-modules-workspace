import { TestBed } from '@angular/core/testing';

import { LoadMfaService } from './load-mfa.service';

describe('LoadMfaService', () => {
  let service: LoadMfaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMfaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
