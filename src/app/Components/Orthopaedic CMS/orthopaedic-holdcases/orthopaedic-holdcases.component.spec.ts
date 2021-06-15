import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicHoldcasesComponent } from './orthopaedic-holdcases.component';

describe('OrthopaedicHoldcasesComponent', () => {
  let component: OrthopaedicHoldcasesComponent;
  let fixture: ComponentFixture<OrthopaedicHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
