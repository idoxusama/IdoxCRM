import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingproformaComponent } from './orthopaedic-outstandingproforma.component';

describe('OrthopaedicOutstandingproformaComponent', () => {
  let component: OrthopaedicOutstandingproformaComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
