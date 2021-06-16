import { TestBed } from '@angular/core/testing';

import { FutureClinicRequiredService } from './future-clinic-required.service';

describe('FutureClinicRequiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FutureClinicRequiredService = TestBed.get(FutureClinicRequiredService);
    expect(service).toBeTruthy();
  });
});
