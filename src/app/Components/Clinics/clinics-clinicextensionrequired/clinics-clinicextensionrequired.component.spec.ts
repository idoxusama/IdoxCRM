import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsClinicextensionrequiredComponent } from './clinics-clinicextensionrequired.component';

describe('ClinicsClinicextensionrequiredComponent', () => {
  let component: ClinicsClinicextensionrequiredComponent;
  let fixture: ComponentFixture<ClinicsClinicextensionrequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsClinicextensionrequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsClinicextensionrequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
