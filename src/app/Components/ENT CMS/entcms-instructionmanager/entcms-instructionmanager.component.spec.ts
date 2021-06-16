import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsInstructionmanagerComponent } from './entcms-instructionmanager.component';

describe('EntcmsInstructionmanagerComponent', () => {
  let component: EntcmsInstructionmanagerComponent;
  let fixture: ComponentFixture<EntcmsInstructionmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsInstructionmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsInstructionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
