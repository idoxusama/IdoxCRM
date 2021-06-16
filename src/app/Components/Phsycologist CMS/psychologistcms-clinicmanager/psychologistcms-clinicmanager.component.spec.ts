import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsClinicmanagerComponent } from './psychologistcms-clinicmanager.component';

describe('PsychologistcmsClinicmanagerComponent', () => {
  let component: PsychologistcmsClinicmanagerComponent;
  let fixture: ComponentFixture<PsychologistcmsClinicmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsClinicmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsClinicmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
