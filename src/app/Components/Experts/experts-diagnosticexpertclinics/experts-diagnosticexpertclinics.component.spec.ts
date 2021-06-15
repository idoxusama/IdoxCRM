import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsDiagnosticexpertclinicsComponent } from './experts-diagnosticexpertclinics.component';

describe('ExpertsDiagnosticexpertclinicsComponent', () => {
  let component: ExpertsDiagnosticexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsDiagnosticexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsDiagnosticexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsDiagnosticexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
