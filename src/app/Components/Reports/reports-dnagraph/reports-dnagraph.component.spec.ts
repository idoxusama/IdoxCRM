import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDnagraphComponent } from './reports-dnagraph.component';

describe('ReportsDnagraphComponent', () => {
  let component: ReportsDnagraphComponent;
  let fixture: ComponentFixture<ReportsDnagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDnagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDnagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
