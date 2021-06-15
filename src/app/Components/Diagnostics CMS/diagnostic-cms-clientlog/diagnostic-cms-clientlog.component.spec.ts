import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSClientlogComponent } from './diagnostic-cms-clientlog.component';

describe('DiagnosticCMSClientlogComponent', () => {
  let component: DiagnosticCMSClientlogComponent;
  let fixture: ComponentFixture<DiagnosticCMSClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
