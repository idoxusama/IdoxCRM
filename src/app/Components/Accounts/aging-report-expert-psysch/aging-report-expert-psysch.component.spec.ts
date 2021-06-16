import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportExpertPsyschComponent } from './aging-report-expert-psysch.component';

describe('AgingReportExpertPsyschComponent', () => {
  let component: AgingReportExpertPsyschComponent;
  let fixture: ComponentFixture<AgingReportExpertPsyschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportExpertPsyschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportExpertPsyschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
