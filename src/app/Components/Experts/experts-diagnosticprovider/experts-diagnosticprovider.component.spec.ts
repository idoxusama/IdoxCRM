import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsDiagnosticproviderComponent } from './experts-diagnosticprovider.component';

describe('ExpertsDiagnosticproviderComponent', () => {
  let component: ExpertsDiagnosticproviderComponent;
  let fixture: ComponentFixture<ExpertsDiagnosticproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsDiagnosticproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsDiagnosticproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
