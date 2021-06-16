import { TestBed } from '@angular/core/testing';

import { MedicoExpertClinicsService } from './medico-expert-clinics.service';

describe('MedicoExpertClinicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicoExpertClinicsService = TestBed.get(MedicoExpertClinicsService);
    expect(service).toBeTruthy();
  });
});
