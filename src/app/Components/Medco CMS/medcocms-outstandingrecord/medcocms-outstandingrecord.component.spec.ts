import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingrecordComponent } from './medcocms-outstandingrecord.component';

describe('MedcocmsOutstandingrecordComponent', () => {
  let component: MedcocmsOutstandingrecordComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
