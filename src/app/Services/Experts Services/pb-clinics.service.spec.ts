import { TestBed } from '@angular/core/testing';

import { PbClinicsService } from './pb-clinics.service';

describe('PbClinicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PbClinicsService = TestBed.get(PbClinicsService);
    expect(service).toBeTruthy();
  });
});
