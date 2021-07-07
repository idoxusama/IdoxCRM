/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OutstandingAppointmentsService } from './outstanding-appointments.service';

describe('Service: OutstandingAppointments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutstandingAppointmentsService]
    });
  });

  it('should ...', inject([OutstandingAppointmentsService], (service: OutstandingAppointmentsService) => {
    expect(service).toBeTruthy();
  }));
});
