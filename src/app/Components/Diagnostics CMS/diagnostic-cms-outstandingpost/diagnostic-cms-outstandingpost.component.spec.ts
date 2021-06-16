import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSOutstandingpostComponent } from './diagnostic-cms-outstandingpost.component';

describe('DiagnosticCMSOutstandingpostComponent', () => {
  let component: DiagnosticCMSOutstandingpostComponent;
  let fixture: ComponentFixture<DiagnosticCMSOutstandingpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSOutstandingpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSOutstandingpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
