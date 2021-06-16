import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsClinicmanagerComponent } from './medcocms-clinicmanager.component';

describe('MedcocmsClinicmanagerComponent', () => {
  let component: MedcocmsClinicmanagerComponent;
  let fixture: ComponentFixture<MedcocmsClinicmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsClinicmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsClinicmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
