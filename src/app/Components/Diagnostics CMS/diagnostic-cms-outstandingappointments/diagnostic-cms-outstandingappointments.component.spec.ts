import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSOutstandingappointmentsComponent } from './diagnostic-cms-outstandingappointments.component';

describe('DiagnosticCMSOutstandingappointmentsComponent', () => {
  let component: DiagnosticCMSOutstandingappointmentsComponent;
  let fixture: ComponentFixture<DiagnosticCMSOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
