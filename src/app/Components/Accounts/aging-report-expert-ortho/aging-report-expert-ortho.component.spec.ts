import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportExpertOrthoComponent } from './aging-report-expert-ortho.component';

describe('AgingReportExpertOrthoComponent', () => {
  let component: AgingReportExpertOrthoComponent;
  let fixture: ComponentFixture<AgingReportExpertOrthoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportExpertOrthoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportExpertOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
