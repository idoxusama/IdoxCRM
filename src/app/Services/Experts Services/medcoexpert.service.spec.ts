import { TestBed } from '@angular/core/testing';

import { MedcoexpertService } from './medcoexpert.service';

describe('MedcoexpertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedcoexpertService = TestBed.get(MedcoexpertService);
    expect(service).toBeTruthy();
  });
});
