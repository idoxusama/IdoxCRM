import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPaymentReportComponent } from './clinic-payment-report.component';

describe('ClinicPaymentReportComponent', () => {
  let component: ClinicPaymentReportComponent;
  let fixture: ComponentFixture<ClinicPaymentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPaymentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
