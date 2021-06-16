/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VenuelocationService } from './venuelocation.service';

describe('Service: Venuelocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VenuelocationService]
    });
  });

  it('should ...', inject([VenuelocationService], (service: VenuelocationService) => {
    expect(service).toBeTruthy();
  }));
});
