import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicClientlogComponent } from './orthopaedic-clientlog.component';

describe('OrthopaedicClientlogComponent', () => {
  let component: OrthopaedicClientlogComponent;
  let fixture: ComponentFixture<OrthopaedicClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
