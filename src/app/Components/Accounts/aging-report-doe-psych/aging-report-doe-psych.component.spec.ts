import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportDOEPsychComponent } from './aging-report-doe-psych.component';

describe('AgingReportDOEPsychComponent', () => {
  let component: AgingReportDOEPsychComponent;
  let fixture: ComponentFixture<AgingReportDOEPsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportDOEPsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportDOEPsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
