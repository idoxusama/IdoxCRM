import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBreakdownPsychComponent } from './financial-breakdown-psych.component';

describe('FinancialBreakdownPsychComponent', () => {
  let component: FinancialBreakdownPsychComponent;
  let fixture: ComponentFixture<FinancialBreakdownPsychComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialBreakdownPsychComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialBreakdownPsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
