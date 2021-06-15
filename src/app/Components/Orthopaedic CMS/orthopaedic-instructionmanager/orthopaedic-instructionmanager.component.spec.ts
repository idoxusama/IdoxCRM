import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicInstructionmanagerComponent } from './orthopaedic-instructionmanager.component';

describe('OrthopaedicInstructionmanagerComponent', () => {
  let component: OrthopaedicInstructionmanagerComponent;
  let fixture: ComponentFixture<OrthopaedicInstructionmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicInstructionmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicInstructionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
