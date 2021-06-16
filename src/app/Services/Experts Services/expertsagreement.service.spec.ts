import { TestBed } from '@angular/core/testing';

import { ExpertsagreementService } from './expertsagreement.service';

describe('ExpertsagreementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpertsagreementService = TestBed.get(ExpertsagreementService);
    expect(service).toBeTruthy();
  });
});
