import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsAwaitingvideoappointmentsComponent } from './psychologistcms-awaitingvideoappointments.component';

describe('PsychologistcmsAwaitingvideoappointmentsComponent', () => {
  let component: PsychologistcmsAwaitingvideoappointmentsComponent;
  let fixture: ComponentFixture<PsychologistcmsAwaitingvideoappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsAwaitingvideoappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsAwaitingvideoappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
