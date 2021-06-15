import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingmedsecComponent } from './orthopaedic-outstandingmedsec.component';

describe('OrthopaedicOutstandingmedsecComponent', () => {
  let component: OrthopaedicOutstandingmedsecComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingmedsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingmedsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingmedsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
