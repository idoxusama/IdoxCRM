import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBreakdownOrthoComponent } from './financial-breakdown-ortho.component';

describe('FinancialBreakdownOrthoComponent', () => {
  let component: FinancialBreakdownOrthoComponent;
  let fixture: ComponentFixture<FinancialBreakdownOrthoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialBreakdownOrthoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialBreakdownOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
