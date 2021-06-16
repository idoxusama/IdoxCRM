import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReport5Component } from './analysis-report5.component';

describe('AnalysisReport5Component', () => {
  let component: AnalysisReport5Component;
  let fixture: ComponentFixture<AnalysisReport5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReport5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReport5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
