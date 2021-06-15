import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSDnalistComponent } from './diagnostic-cms-dnalist.component';

describe('DiagnosticCMSDnalistComponent', () => {
  let component: DiagnosticCMSDnalistComponent;
  let fixture: ComponentFixture<DiagnosticCMSDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
