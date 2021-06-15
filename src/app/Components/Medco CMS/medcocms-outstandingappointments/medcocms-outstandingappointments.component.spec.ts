import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingappointmentsComponent } from './medcocms-outstandingappointments.component';

describe('MedcocmsOutstandingappointmentsComponent', () => {
  let component: MedcocmsOutstandingappointmentsComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
