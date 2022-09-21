import { TestBed } from '@angular/core/testing';

import { GetOpenDataService } from './get-open-data.service';

describe('GetOpenDataService', () => {
  let service: GetOpenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOpenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
