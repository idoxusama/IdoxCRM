import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingappointmentsComponent } from './orthopaedic-outstandingappointments.component';

describe('OrthopaedicOutstandingappointmentsComponent', () => {
  let component: OrthopaedicOutstandingappointmentsComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
