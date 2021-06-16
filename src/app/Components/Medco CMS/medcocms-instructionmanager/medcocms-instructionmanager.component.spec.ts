import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsInstructionmanagerComponent } from './medcocms-instructionmanager.component';

describe('MedcocmsInstructionmanagerComponent', () => {
  let component: MedcocmsInstructionmanagerComponent;
  let fixture: ComponentFixture<MedcocmsInstructionmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsInstructionmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsInstructionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
