import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSOutstandingappointmentsComponent } from './cbtcms-outstandingappointments.component';

describe('CBTCMSOutstandingappointmentsComponent', () => {
  let component: CBTCMSOutstandingappointmentsComponent;
  let fixture: ComponentFixture<CBTCMSOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
