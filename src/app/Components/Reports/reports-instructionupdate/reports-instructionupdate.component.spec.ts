import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsInstructionupdateComponent } from './reports-instructionupdate.component';

describe('ReportsInstructionupdateComponent', () => {
  let component: ReportsInstructionupdateComponent;
  let fixture: ComponentFixture<ReportsInstructionupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsInstructionupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsInstructionupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
