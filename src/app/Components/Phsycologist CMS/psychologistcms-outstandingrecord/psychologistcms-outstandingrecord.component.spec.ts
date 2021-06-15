import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingrecordComponent } from './psychologistcms-outstandingrecord.component';

describe('PsychologistcmsOutstandingrecordComponent', () => {
  let component: PsychologistcmsOutstandingrecordComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
