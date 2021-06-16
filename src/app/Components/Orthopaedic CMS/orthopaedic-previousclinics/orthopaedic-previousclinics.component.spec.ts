import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicPreviousclinicsComponent } from './orthopaedic-previousclinics.component';

describe('OrthopaedicPreviousclinicsComponent', () => {
  let component: OrthopaedicPreviousclinicsComponent;
  let fixture: ComponentFixture<OrthopaedicPreviousclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicPreviousclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicPreviousclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
