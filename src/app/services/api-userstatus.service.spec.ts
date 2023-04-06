import { TestBed } from '@angular/core/testing';

import { ApiUserStatusService } from './api-userstatus.service';

describe('ApiUserstatusService', () => {
  let service: ApiUserStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
