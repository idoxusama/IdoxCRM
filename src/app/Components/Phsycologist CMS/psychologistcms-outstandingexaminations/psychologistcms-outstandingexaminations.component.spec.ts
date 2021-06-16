import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingexaminationsComponent } from './psychologistcms-outstandingexaminations.component';

describe('PsychologistcmsOutstandingexaminationsComponent', () => {
  let component: PsychologistcmsOutstandingexaminationsComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
