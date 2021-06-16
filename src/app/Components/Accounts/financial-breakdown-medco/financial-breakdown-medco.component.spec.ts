import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBreakdownMedcoComponent } from './financial-breakdown-medco.component';

describe('FinancialBreakdownMedcoComponent', () => {
  let component: FinancialBreakdownMedcoComponent;
  let fixture: ComponentFixture<FinancialBreakdownMedcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialBreakdownMedcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialBreakdownMedcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
