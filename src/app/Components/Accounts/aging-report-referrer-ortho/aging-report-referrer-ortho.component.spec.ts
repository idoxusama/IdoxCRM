import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportReferrerOrthoComponent } from './aging-report-referrer-ortho.component';

describe('AgingReportReferrerOrthoComponent', () => {
  let component: AgingReportReferrerOrthoComponent;
  let fixture: ComponentFixture<AgingReportReferrerOrthoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportReferrerOrthoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportReferrerOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
