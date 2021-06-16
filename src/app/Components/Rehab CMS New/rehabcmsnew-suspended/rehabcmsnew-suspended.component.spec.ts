import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewSuspendedComponent } from './rehabcmsnew-suspended.component';

describe('RehabcmsnewSuspendedComponent', () => {
  let component: RehabcmsnewSuspendedComponent;
  let fixture: ComponentFixture<RehabcmsnewSuspendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewSuspendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewSuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
