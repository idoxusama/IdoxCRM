import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesInvoicemanagerComponent } from './invoices-invoicemanager.component';

describe('InvoicesInvoicemanagerComponent', () => {
  let component: InvoicesInvoicemanagerComponent;
  let fixture: ComponentFixture<InvoicesInvoicemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesInvoicemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesInvoicemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
