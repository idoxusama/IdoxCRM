import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldClientlogComponent } from './rehabcmsold-clientlog.component';

describe('RehabcmsoldClientlogComponent', () => {
  let component: RehabcmsoldClientlogComponent;
  let fixture: ComponentFixture<RehabcmsoldClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
