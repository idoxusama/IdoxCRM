import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsOutstandingappointmentsComponent } from './entcms-outstandingappointments.component';

describe('EntcmsOutstandingappointmentsComponent', () => {
  let component: EntcmsOutstandingappointmentsComponent;
  let fixture: ComponentFixture<EntcmsOutstandingappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsOutstandingappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsOutstandingappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
