import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsOrthopaedicvenueComponent } from './experts-orthopaedicvenue.component';

describe('ExpertsOrthopaedicvenueComponent', () => {
  let component: ExpertsOrthopaedicvenueComponent;
  let fixture: ComponentFixture<ExpertsOrthopaedicvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsOrthopaedicvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsOrthopaedicvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
