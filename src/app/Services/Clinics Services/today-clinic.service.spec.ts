/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodayClinicService } from './today-clinic.service';

describe('Service: TodayClinic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodayClinicService]
    });
  });

  it('should ...', inject([TodayClinicService], (service: TodayClinicService) => {
    expect(service).toBeTruthy();
  }));
});
