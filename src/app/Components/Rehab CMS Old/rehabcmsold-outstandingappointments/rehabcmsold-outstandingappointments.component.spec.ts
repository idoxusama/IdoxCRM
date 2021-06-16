import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldOutstandingappointmentsComponent } from './rehabcmsold-outstandingappointments.component';

describe('RehabcmsoldOutstandingappointmentsComponent', () => {
  let component: RehabcmsoldOutstandingappointmentsComponent;
  let fixture: ComponentFixture<RehabcmsoldOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
