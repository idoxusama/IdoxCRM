import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingorthoComponent } from './orthopaedic-outstandingortho.component';

describe('OrthopaedicOutstandingorthoComponent', () => {
  let component: OrthopaedicOutstandingorthoComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingorthoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingorthoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingorthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
