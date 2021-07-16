/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DnasComponent } from './dnas.component';

describe('DnasComponent', () => {
  let component: DnasComponent;
  let fixture: ComponentFixture<DnasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
