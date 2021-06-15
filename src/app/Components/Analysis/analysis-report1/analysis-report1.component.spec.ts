import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReport1Component } from './analysis-report1.component';

describe('AnalysisReport1Component', () => {
  let component: AnalysisReport1Component;
  let fixture: ComponentFixture<AnalysisReport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
