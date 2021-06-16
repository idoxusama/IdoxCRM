import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicClinicmanagerComponent } from './orthopaedic-clinicmanager.component';

describe('OrthopaedicClinicmanagerComponent', () => {
  let component: OrthopaedicClinicmanagerComponent;
  let fixture: ComponentFixture<OrthopaedicClinicmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicClinicmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicClinicmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
