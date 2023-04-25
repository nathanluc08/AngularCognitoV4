import { TestBed } from '@angular/core/testing';

import { AssociationCompanyService } from './association-company.service';

describe('CompanyService', () => {
  let service: AssociationCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociationCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
