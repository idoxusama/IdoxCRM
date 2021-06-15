import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingpsychComponent } from './psychologistcms-outstandingpsych.component';

describe('PsychologistcmsOutstandingpsychComponent', () => {
  let component: PsychologistcmsOutstandingpsychComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingpsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingpsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingpsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
