import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingexaminationsComponent } from './orthopaedic-outstandingexaminations.component';

describe('OrthopaedicOutstandingexaminationsComponent', () => {
  let component: OrthopaedicOutstandingexaminationsComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
