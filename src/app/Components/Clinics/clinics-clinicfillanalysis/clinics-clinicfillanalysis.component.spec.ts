import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsClinicfillanalysisComponent } from './clinics-clinicfillanalysis.component';

describe('ClinicsClinicfillanalysisComponent', () => {
  let component: ClinicsClinicfillanalysisComponent;
  let fixture: ComponentFixture<ClinicsClinicfillanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsClinicfillanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsClinicfillanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
