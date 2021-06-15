import { TestBed } from '@angular/core/testing';

import { ClinicAvailabilityStatusService } from './clinic-availability-status.service';

describe('ClinicAvailabilityStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicAvailabilityStatusService = TestBed.get(ClinicAvailabilityStatusService);
    expect(service).toBeTruthy();
  });
});
