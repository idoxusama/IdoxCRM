import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopaedicNewinstructionsComponent } from './orthopaedic-newinstructions.component';

describe('OrthopaedicNewinstructionsComponent', () => {
  let component: OrthopaedicNewinstructionsComponent;
  let fixture: ComponentFixture<OrthopaedicNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthopaedicNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopaedicNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
