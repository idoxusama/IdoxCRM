/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutstandingAppointmentSchedualComponent } from './outstanding-appointment-schedual.component';

describe('OutstandingAppointmentSchedualComponent', () => {
  let component: OutstandingAppointmentSchedualComponent;
  let fixture: ComponentFixture<OutstandingAppointmentSchedualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstandingAppointmentSchedualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingAppointmentSchedualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
