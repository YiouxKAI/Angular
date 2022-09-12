import { TestBed } from '@angular/core/testing';

import { SMSDIService } from './smsdi.service';

describe('SMSDIService', () => {
  let service: SMSDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMSDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
