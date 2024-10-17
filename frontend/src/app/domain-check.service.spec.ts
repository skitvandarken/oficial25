import { TestBed } from '@angular/core/testing';

import { DomainCheckService } from './domain-check.service';

describe('DomainCheckService', () => {
  let service: DomainCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
