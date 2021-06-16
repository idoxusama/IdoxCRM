import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCMSNewinstructionsComponent } from './diagnostic-cms-newinstructions.component';

describe('DiagnosticCMSNewinstructionsComponent', () => {
  let component: DiagnosticCMSNewinstructionsComponent;
  let fixture: ComponentFixture<DiagnosticCMSNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticCMSNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticCMSNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
