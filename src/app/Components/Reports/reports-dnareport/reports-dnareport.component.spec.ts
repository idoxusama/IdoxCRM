import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDnareportComponent } from './reports-dnareport.component';

describe('ReportsDnareportComponent', () => {
  let component: ReportsDnareportComponent;
  let fixture: ComponentFixture<ReportsDnareportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDnareportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDnareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
