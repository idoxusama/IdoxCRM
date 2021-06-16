import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingrecordComponent } from './orthopaedic-outstandingrecord.component';

describe('OrthopaedicOutstandingrecordComponent', () => {
  let component: OrthopaedicOutstandingrecordComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
