import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingamendmentsComponent } from './orthopaedic-outstandingamendments.component';

describe('OrthopaedicOutstandingamendmentsComponent', () => {
  let component: OrthopaedicOutstandingamendmentsComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingamendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingamendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingamendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
