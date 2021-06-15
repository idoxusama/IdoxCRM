import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingconfirmationComponent } from './psychologistcms-outstandingconfirmation.component';

describe('PsychologistcmsOutstandingconfirmationComponent', () => {
  let component: PsychologistcmsOutstandingconfirmationComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
