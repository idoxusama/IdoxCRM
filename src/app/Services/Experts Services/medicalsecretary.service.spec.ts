import { TestBed } from '@angular/core/testing';

import { MedicalsecretaryService } from './medicalsecretary.service';

describe('MedicalsecretaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalsecretaryService = TestBed.get(MedicalsecretaryService);
    expect(service).toBeTruthy();
  });
});
