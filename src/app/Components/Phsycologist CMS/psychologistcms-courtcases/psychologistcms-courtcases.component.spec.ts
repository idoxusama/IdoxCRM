import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsCourtcasesComponent } from './psychologistcms-courtcases.component';

describe('PsychologistcmsCourtcasesComponent', () => {
  let component: PsychologistcmsCourtcasesComponent;
  let fixture: ComponentFixture<PsychologistcmsCourtcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsCourtcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsCourtcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
