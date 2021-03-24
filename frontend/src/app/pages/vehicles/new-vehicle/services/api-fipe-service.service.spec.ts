import { TestBed } from '@angular/core/testing';

import { ApiFipeServiceService } from './api-fipe-service.service';

describe('ApiFipeServiceService', () => {
  let service: ApiFipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
