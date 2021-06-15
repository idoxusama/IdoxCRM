import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsClinicschedueleComponent } from './psychologistcms-clinicscheduele.component';

describe('PsychologistcmsClinicschedueleComponent', () => {
  let component: PsychologistcmsClinicschedueleComponent;
  let fixture: ComponentFixture<PsychologistcmsClinicschedueleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsClinicschedueleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsClinicschedueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
