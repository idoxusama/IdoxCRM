/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalsecretaryService } from './medicalsecretary.service';

describe('Service: Medicalsecretary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalsecretaryService]
    });
  });

  it('should ...', inject([MedicalsecretaryService], (service: MedicalsecretaryService) => {
    expect(service).toBeTruthy();
  }));
});
