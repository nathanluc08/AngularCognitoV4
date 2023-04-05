import { TestBed } from '@angular/core/testing';

import { ApiDatabasesService } from './api-databases.service';

describe('ApiDatabasesService', () => {
  let service: ApiDatabasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDatabasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
