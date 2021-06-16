import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSOutstandingreportsComponent } from './diagnostic-cms-outstandingreports.component';

describe('DiagnosticCMSOutstandingreportsComponent', () => {
  let component: DiagnosticCMSOutstandingreportsComponent;
  let fixture: ComponentFixture<DiagnosticCMSOutstandingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSOutstandingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSOutstandingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
