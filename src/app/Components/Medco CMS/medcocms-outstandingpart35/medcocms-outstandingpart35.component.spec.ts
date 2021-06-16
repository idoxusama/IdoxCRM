import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingpart35Component } from './medcocms-outstandingpart35.component';

describe('MedcocmsOutstandingpart35Component', () => {
  let component: MedcocmsOutstandingpart35Component;
  let fixture: ComponentFixture<MedcocmsOutstandingpart35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingpart35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingpart35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
