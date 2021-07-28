/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLegalAgrementComponent } from './service-legal-agrement.component';

describe('ServiceLegalAgrementComponent', () => {
  let component: ServiceLegalAgrementComponent;
  let fixture: ComponentFixture<ServiceLegalAgrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLegalAgrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLegalAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
