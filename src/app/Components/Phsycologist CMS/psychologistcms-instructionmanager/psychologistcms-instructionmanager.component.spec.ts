import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsInstructionmanagerComponent } from './psychologistcms-instructionmanager.component';

describe('PsychologistcmsInstructionmanagerComponent', () => {
  let component: PsychologistcmsInstructionmanagerComponent;
  let fixture: ComponentFixture<PsychologistcmsInstructionmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsInstructionmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsInstructionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
