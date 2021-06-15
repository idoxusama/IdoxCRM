import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisErrortasksComponent } from './analysis-errortasks.component';

describe('AnalysisErrortasksComponent', () => {
  let component: AnalysisErrortasksComponent;
  let fixture: ComponentFixture<AnalysisErrortasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisErrortasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisErrortasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
