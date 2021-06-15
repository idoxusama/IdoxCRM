import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReport2Component } from './analysis-report2.component';

describe('AnalysisReport2Component', () => {
  let component: AnalysisReport2Component;
  let fixture: ComponentFixture<AnalysisReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
