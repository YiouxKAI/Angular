import { TestBed } from '@angular/core/testing';

import { AASMSService } from './aasms.service';

describe('AASMSService', () => {
  let service: AASMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AASMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
