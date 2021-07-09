/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssignedMedicalSectretaryListComponent } from './assigned-medical-sectretary-list.component';

describe('AssignedMedicalSectretaryListComponent', () => {
  let component: AssignedMedicalSectretaryListComponent;
  let fixture: ComponentFixture<AssignedMedicalSectretaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedMedicalSectretaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedMedicalSectretaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
