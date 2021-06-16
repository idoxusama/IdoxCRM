import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsHoldcasesComponent } from './medcocms-holdcases.component';

describe('MedcocmsHoldcasesComponent', () => {
  let component: MedcocmsHoldcasesComponent;
  let fixture: ComponentFixture<MedcocmsHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
