/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlaService } from './sla.service';

describe('Service: Sla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlaService]
    });
  });

  it('should ...', inject([SlaService], (service: SlaService) => {
    expect(service).toBeTruthy();
  }));
});
