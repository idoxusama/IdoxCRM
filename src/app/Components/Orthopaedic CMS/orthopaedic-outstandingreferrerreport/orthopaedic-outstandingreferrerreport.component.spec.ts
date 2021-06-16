import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingreferrerreportComponent } from './orthopaedic-outstandingreferrerreport.component';

describe('OrthopaedicOutstandingreferrerreportComponent', () => {
  let component: OrthopaedicOutstandingreferrerreportComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingreferrerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingreferrerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingreferrerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
