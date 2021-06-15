import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisEmailtasksreportComponent } from './analysis-emailtasksreport.component';

describe('AnalysisEmailtasksreportComponent', () => {
  let component: AnalysisEmailtasksreportComponent;
  let fixture: ComponentFixture<AnalysisEmailtasksreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisEmailtasksreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisEmailtasksreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
