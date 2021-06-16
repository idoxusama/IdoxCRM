import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportReferrerPsyschComponent } from './aging-report-referrer-psysch.component';

describe('AgingReportReferrerPsyschComponent', () => {
  let component: AgingReportReferrerPsyschComponent;
  let fixture: ComponentFixture<AgingReportReferrerPsyschComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportReferrerPsyschComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportReferrerPsyschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
