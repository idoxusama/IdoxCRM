import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingamendmentsComponent } from './medcocms-outstandingamendments.component';

describe('MedcocmsOutstandingamendmentsComponent', () => {
  let component: MedcocmsOutstandingamendmentsComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingamendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingamendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingamendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
