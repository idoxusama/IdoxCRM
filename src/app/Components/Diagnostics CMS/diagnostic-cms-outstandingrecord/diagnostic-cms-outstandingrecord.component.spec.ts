import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSOutstandingrecordComponent } from './diagnostic-cms-outstandingrecord.component';

describe('DiagnosticCMSOutstandingrecordComponent', () => {
  let component: DiagnosticCMSOutstandingrecordComponent;
  let fixture: ComponentFixture<DiagnosticCMSOutstandingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSOutstandingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSOutstandingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
