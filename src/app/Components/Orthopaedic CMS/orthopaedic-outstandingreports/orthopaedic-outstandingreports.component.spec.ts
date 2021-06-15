import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicOutstandingreportsComponent } from './orthopaedic-outstandingreports.component';

describe('OrthopaedicOutstandingreportsComponent', () => {
  let component: OrthopaedicOutstandingreportsComponent;
  let fixture: ComponentFixture<OrthopaedicOutstandingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicOutstandingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicOutstandingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
