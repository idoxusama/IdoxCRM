import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAssigntasksComponent } from './analysis-assigntasks.component';

describe('AnalysisAssigntasksComponent', () => {
  let component: AnalysisAssigntasksComponent;
  let fixture: ComponentFixture<AnalysisAssigntasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisAssigntasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAssigntasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
