import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReport3Component } from './analysis-report3.component';

describe('AnalysisReport3Component', () => {
  let component: AnalysisReport3Component;
  let fixture: ComponentFixture<AnalysisReport3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReport3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
