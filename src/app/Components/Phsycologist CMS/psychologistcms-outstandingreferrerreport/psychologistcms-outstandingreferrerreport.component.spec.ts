import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingreferrerreportComponent } from './psychologistcms-outstandingreferrerreport.component';

describe('PsychologistcmsOutstandingreferrerreportComponent', () => {
  let component: PsychologistcmsOutstandingreferrerreportComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingreferrerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingreferrerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingreferrerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
