import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsClinicmanagerComponent } from './entcms-clinicmanager.component';

describe('EntcmsClinicmanagerComponent', () => {
  let component: EntcmsClinicmanagerComponent;
  let fixture: ComponentFixture<EntcmsClinicmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsClinicmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsClinicmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
