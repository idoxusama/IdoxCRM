import { TestBed } from '@angular/core/testing';

import { NewClinicRequiredService } from './new-clinic-required.service';

describe('NewClinicRequiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewClinicRequiredService = TestBed.get(NewClinicRequiredService);
    expect(service).toBeTruthy();
  });
});
