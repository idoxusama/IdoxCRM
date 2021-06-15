import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewOutstandingappointmentsComponent } from './rehabcmsnew-outstandingappointments.component';

describe('RehabcmsnewOutstandingappointmentsComponent', () => {
  let component: RehabcmsnewOutstandingappointmentsComponent;
  let fixture: ComponentFixture<RehabcmsnewOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
