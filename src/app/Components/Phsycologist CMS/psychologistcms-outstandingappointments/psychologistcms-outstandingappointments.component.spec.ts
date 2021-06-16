import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingappointmentsComponent } from './psychologistcms-outstandingappointments.component';

describe('PsychologistcmsOutstandingappointmentsComponent', () => {
  let component: PsychologistcmsOutstandingappointmentsComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
