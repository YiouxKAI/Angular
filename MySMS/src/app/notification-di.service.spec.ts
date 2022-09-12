import { TestBed } from '@angular/core/testing';

import { NotificationDIService } from './notification-di.service';

describe('NotificationDIService', () => {
  let service: NotificationDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
