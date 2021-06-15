import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldOnholdComponent } from './rehabcmsold-onhold.component';

describe('RehabcmsoldOnholdComponent', () => {
  let component: RehabcmsoldOnholdComponent;
  let fixture: ComponentFixture<RehabcmsoldOnholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldOnholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldOnholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
