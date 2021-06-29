/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstructionStateComponent } from './instruction-state.component';

describe('InstructionStateComponent', () => {
  let component: InstructionStateComponent;
  let fixture: ComponentFixture<InstructionStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
