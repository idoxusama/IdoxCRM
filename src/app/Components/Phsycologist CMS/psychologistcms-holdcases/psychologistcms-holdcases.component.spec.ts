import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsHoldcasesComponent } from './psychologistcms-holdcases.component';

describe('PsychologistcmsHoldcasesComponent', () => {
  let component: PsychologistcmsHoldcasesComponent;
  let fixture: ComponentFixture<PsychologistcmsHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
