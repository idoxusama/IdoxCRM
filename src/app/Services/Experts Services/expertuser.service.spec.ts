import { TestBed } from '@angular/core/testing';

import { ExpertuserService } from './expertuser.service';

describe('ExpertuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpertuserService = TestBed.get(ExpertuserService);
    expect(service).toBeTruthy();
  });
});
