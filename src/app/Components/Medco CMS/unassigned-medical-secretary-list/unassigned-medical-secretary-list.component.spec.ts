/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnassignedMedicalSecretaryListComponent } from './unassigned-medical-secretary-list.component';

describe('UnassignedMedicalSecretaryListComponent', () => {
  let component: UnassignedMedicalSecretaryListComponent;
  let fixture: ComponentFixture<UnassignedMedicalSecretaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedMedicalSecretaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedMedicalSecretaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
