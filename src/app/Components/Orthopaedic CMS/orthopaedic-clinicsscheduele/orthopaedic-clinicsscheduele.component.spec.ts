import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicClinicsschedueleComponent } from './orthopaedic-clinicsscheduele.component';

describe('OrthopaedicClinicsschedueleComponent', () => {
  let component: OrthopaedicClinicsschedueleComponent;
  let fixture: ComponentFixture<OrthopaedicClinicsschedueleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicClinicsschedueleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicClinicsschedueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
