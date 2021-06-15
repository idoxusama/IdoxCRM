import { TestBed } from '@angular/core/testing';

import { OutstandingClinicListService } from './outstanding-clinic-list.service';

describe('OutstandingClinicListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutstandingClinicListService = TestBed.get(OutstandingClinicListService);
    expect(service).toBeTruthy();
  });
});
