import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSHoldcasesComponent } from './diagnostic-cms-holdcases.component';

describe('DiagnosticCMSHoldcasesComponent', () => {
  let component: DiagnosticCMSHoldcasesComponent;
  let fixture: ComponentFixture<DiagnosticCMSHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
