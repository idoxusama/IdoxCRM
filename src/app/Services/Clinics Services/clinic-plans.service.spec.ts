/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicPlansService } from './clinic-plans.service';

describe('Service: ClinicPlans', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicPlansService]
    });
  });

  it('should ...', inject([ClinicPlansService], (service: ClinicPlansService) => {
    expect(service).toBeTruthy();
  }));
});
