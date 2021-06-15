import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsClinicavailabilitystatusComponent } from './clinics-clinicavailabilitystatus.component';

describe('ClinicsClinicavailabilitystatusComponent', () => {
  let component: ClinicsClinicavailabilitystatusComponent;
  let fixture: ComponentFixture<ClinicsClinicavailabilitystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsClinicavailabilitystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsClinicavailabilitystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
