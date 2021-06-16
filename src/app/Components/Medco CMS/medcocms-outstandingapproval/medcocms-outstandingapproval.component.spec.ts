import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingapprovalComponent } from './medcocms-outstandingapproval.component';

describe('MedcocmsOutstandingapprovalComponent', () => {
  let component: MedcocmsOutstandingapprovalComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
