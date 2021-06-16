import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsPrequestionnaireComponent } from './psychologistcms-prequestionnaire.component';

describe('PsychologistcmsPrequestionnaireComponent', () => {
  let component: PsychologistcmsPrequestionnaireComponent;
  let fixture: ComponentFixture<PsychologistcmsPrequestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsPrequestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsPrequestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
