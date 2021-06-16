/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferrerService } from './referrer.service';

describe('Service: Referrer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferrerService]
    });
  });

  it('should ...', inject([ReferrerService], (service: ReferrerService) => {
    expect(service).toBeTruthy();
  }));
});
