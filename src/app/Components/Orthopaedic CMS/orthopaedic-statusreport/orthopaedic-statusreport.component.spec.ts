import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicStatusreportComponent } from './orthopaedic-statusreport.component';

describe('OrthopaedicStatusreportComponent', () => {
  let component: OrthopaedicStatusreportComponent;
  let fixture: ComponentFixture<OrthopaedicStatusreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicStatusreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicStatusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
