import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisEmailtasksComponent } from './analysis-emailtasks.component';

describe('AnalysisEmailtasksComponent', () => {
  let component: AnalysisEmailtasksComponent;
  let fixture: ComponentFixture<AnalysisEmailtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisEmailtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisEmailtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
