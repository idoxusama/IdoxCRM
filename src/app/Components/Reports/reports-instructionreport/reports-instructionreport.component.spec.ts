import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsInstructionreportComponent } from './reports-instructionreport.component';

describe('ReportsInstructionreportComponent', () => {
  let component: ReportsInstructionreportComponent;
  let fixture: ComponentFixture<ReportsInstructionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsInstructionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsInstructionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
