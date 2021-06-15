import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewUndertreatmentComponent } from './rehabcmsnew-undertreatment.component';

describe('RehabcmsnewUndertreatmentComponent', () => {
  let component: RehabcmsnewUndertreatmentComponent;
  let fixture: ComponentFixture<RehabcmsnewUndertreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewUndertreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewUndertreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
