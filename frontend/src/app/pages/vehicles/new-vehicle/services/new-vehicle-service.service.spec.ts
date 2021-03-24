import { TestBed } from '@angular/core/testing';

import { NewVehicleServiceService } from './new-vehicle-service.service';

describe('NewVehicleServiceService', () => {
  let service: NewVehicleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewVehicleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
