import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicDnalistComponent } from './orthopaedic-dnalist.component';

describe('OrthopaedicDnalistComponent', () => {
  let component: OrthopaedicDnalistComponent;
  let fixture: ComponentFixture<OrthopaedicDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
