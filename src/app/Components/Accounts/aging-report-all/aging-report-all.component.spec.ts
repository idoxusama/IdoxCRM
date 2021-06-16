import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgingReportAllComponent } from './aging-report-all.component';

describe('AgingReportAllComponent', () => {
  let component: AgingReportAllComponent;
  let fixture: ComponentFixture<AgingReportAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgingReportAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgingReportAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
