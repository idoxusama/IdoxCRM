/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReportWritingService } from './report-writing.service';

describe('Service: ReportWriting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportWritingService]
    });
  });

  it('should ...', inject([ReportWritingService], (service: ReportWritingService) => {
    expect(service).toBeTruthy();
  }));
});
