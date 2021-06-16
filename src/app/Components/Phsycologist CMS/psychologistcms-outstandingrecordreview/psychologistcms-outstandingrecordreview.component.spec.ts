import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingrecordreviewComponent } from './psychologistcms-outstandingrecordreview.component';

describe('PsychologistcmsOutstandingrecordreviewComponent', () => {
  let component: PsychologistcmsOutstandingrecordreviewComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingrecordreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingrecordreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingrecordreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
