import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesOutstandinginvoicesComponent } from './invoices-outstandinginvoices.component';

describe('InvoicesOutstandinginvoicesComponent', () => {
  let component: InvoicesOutstandinginvoicesComponent;
  let fixture: ComponentFixture<InvoicesOutstandinginvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesOutstandinginvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesOutstandinginvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
