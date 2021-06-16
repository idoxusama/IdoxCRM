import { TestBed } from '@angular/core/testing';

import { ClinicExtentionRequiredService } from './clinic-extention-required.service';

describe('ClinicExtentionRequiredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicExtentionRequiredService = TestBed.get(ClinicExtentionRequiredService);
    expect(service).toBeTruthy();
  });
});
