import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewOnholdComponent } from './rehabcmsnew-onhold.component';

describe('RehabcmsnewOnholdComponent', () => {
  let component: RehabcmsnewOnholdComponent;
  let fixture: ComponentFixture<RehabcmsnewOnholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewOnholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewOnholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
