import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicCourtscasesComponent } from './orthopaedic-courtscases.component';

describe('OrthopaedicCourtscasesComponent', () => {
  let component: OrthopaedicCourtscasesComponent;
  let fixture: ComponentFixture<OrthopaedicCourtscasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicCourtscasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicCourtscasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
