import { TestBed } from '@angular/core/testing';

import { DiagnosticexpertclinicsService } from './diagnosticexpertclinics.service';

describe('DiagnosticexpertclinicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticexpertclinicsService = TestBed.get(DiagnosticexpertclinicsService);
    expect(service).toBeTruthy();
  });
});
