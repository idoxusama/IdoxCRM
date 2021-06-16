import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldSuspendedComponent } from './rehabcmsold-suspended.component';

describe('RehabcmsoldSuspendedComponent', () => {
  let component: RehabcmsoldSuspendedComponent;
  let fixture: ComponentFixture<RehabcmsoldSuspendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldSuspendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldSuspendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
