import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportRehabComponent } from './aging-report-rehab.component';

describe('AgingReportRehabComponent', () => {
  let component: AgingReportRehabComponent;
  let fixture: ComponentFixture<AgingReportRehabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportRehabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportRehabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
