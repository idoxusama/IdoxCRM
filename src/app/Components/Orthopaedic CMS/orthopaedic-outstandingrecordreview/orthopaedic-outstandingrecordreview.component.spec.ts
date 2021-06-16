import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingrecordreviewComponent } from './orthopaedic-outstandingrecordreview.component';

describe('OrthopaedicOutstandingrecordreviewComponent', () => {
  let component: OrthopaedicOutstandingrecordreviewComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingrecordreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingrecordreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingrecordreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
