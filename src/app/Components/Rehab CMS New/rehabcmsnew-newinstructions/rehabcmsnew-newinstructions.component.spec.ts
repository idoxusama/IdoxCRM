import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewNewinstructionsComponent } from './rehabcmsnew-newinstructions.component';

describe('RehabcmsnewNewinstructionsComponent', () => {
  let component: RehabcmsnewNewinstructionsComponent;
  let fixture: ComponentFixture<RehabcmsnewNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
