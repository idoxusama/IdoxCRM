import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldNewinstructionsComponent } from './rehabcmsold-newinstructions.component';

describe('RehabcmsoldNewinstructionsComponent', () => {
  let component: RehabcmsoldNewinstructionsComponent;
  let fixture: ComponentFixture<RehabcmsoldNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
