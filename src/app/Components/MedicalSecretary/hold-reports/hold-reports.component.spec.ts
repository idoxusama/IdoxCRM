/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HoldReportsComponent } from './hold-reports.component';

describe('HoldReportsComponent', () => {
  let component: HoldReportsComponent;
  let fixture: ComponentFixture<HoldReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
