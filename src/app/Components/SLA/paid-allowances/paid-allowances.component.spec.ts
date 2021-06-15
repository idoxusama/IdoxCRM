/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaidAllowancesComponent } from './paid-allowances.component';

describe('PaidAllowancesComponent', () => {
  let component: PaidAllowancesComponent;
  let fixture: ComponentFixture<PaidAllowancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidAllowancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
