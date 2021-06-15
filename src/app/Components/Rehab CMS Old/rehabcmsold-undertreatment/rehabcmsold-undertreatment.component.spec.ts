import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldUndertreatmentComponent } from './rehabcmsold-undertreatment.component';

describe('RehabcmsoldUndertreatmentComponent', () => {
  let component: RehabcmsoldUndertreatmentComponent;
  let fixture: ComponentFixture<RehabcmsoldUndertreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldUndertreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldUndertreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
