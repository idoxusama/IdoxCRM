import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDocumentreportComponent } from './analysis-documentreport.component';

describe('AnalysisDocumentreportComponent', () => {
  let component: AnalysisDocumentreportComponent;
  let fixture: ComponentFixture<AnalysisDocumentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisDocumentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisDocumentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
