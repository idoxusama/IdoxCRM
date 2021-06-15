import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingconfirmationComponent } from './orthopaedic-outstandingconfirmation.component';

describe('OrthopaedicOutstandingconfirmationComponent', () => {
  let component: OrthopaedicOutstandingconfirmationComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
