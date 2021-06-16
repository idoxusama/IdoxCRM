import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingamendmentsComponent } from './psychologistcms-outstandingamendments.component';

describe('PsychologistcmsOutstandingamendmentsComponent', () => {
  let component: PsychologistcmsOutstandingamendmentsComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingamendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingamendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingamendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
