import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesExpertclinicexpenseComponent } from './invoices-expertclinicexpense.component';

describe('InvoicesExpertclinicexpenseComponent', () => {
  let component: InvoicesExpertclinicexpenseComponent;
  let fixture: ComponentFixture<InvoicesExpertclinicexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesExpertclinicexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesExpertclinicexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
