import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewClientlogComponent } from './rehabcmsnew-clientlog.component';

describe('RehabcmsnewClientlogComponent', () => {
  let component: RehabcmsnewClientlogComponent;
  let fixture: ComponentFixture<RehabcmsnewClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
