import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSOutstandingexaminationsComponent } from './diagnostic-cms-outstandingexaminations.component';

describe('DiagnosticCMSOutstandingexaminationsComponent', () => {
  let component: DiagnosticCMSOutstandingexaminationsComponent;
  let fixture: ComponentFixture<DiagnosticCMSOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
