/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalPerformaService } from './medical-performa.service';

describe('Service: MedicalPerforma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalPerformaService]
    });
  });

  it('should ...', inject([MedicalPerformaService], (service: MedicalPerformaService) => {
    expect(service).toBeTruthy();
  }));
});
