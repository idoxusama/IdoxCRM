import { TestBed } from '@angular/core/testing';

import { ClinicFillAnalysisService } from './clinic-fill-analysis.service';

describe('ClinicFillAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicFillAnalysisService = TestBed.get(ClinicFillAnalysisService);
    expect(service).toBeTruthy();
  });
});
