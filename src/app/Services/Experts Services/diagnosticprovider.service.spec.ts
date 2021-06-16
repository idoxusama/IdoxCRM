import { TestBed } from '@angular/core/testing';

import { DiagnosticproviderService } from './diagnosticprovider.service';

describe('DiagnosticproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnosticproviderService = TestBed.get(DiagnosticproviderService);
    expect(service).toBeTruthy();
  });
});
