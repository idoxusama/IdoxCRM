import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPsycologistReportSentComponent } from './analysis-psycologist-report-sent.component';

describe('AnalysisPsycologistReportSentComponent', () => {
  let component: AnalysisPsycologistReportSentComponent;
  let fixture: ComponentFixture<AnalysisPsycologistReportSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisPsycologistReportSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPsycologistReportSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
