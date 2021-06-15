import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingmedsecComponent } from './psychologistcms-outstandingmedsec.component';

describe('PsychologistcmsOutstandingmedsecComponent', () => {
  let component: PsychologistcmsOutstandingmedsecComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingmedsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingmedsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingmedsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
