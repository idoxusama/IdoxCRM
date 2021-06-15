import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDailysummaryreportComponent } from './analysis-dailysummaryreport.component';

describe('AnalysisDailysummaryreportComponent', () => {
  let component: AnalysisDailysummaryreportComponent;
  let fixture: ComponentFixture<AnalysisDailysummaryreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisDailysummaryreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisDailysummaryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
