import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsOrthopaedicexpertComponent } from './experts-orthopaedicexpert.component';

describe('ExpertsOrthopaedicexpertComponent', () => {
  let component: ExpertsOrthopaedicexpertComponent;
  let fixture: ComponentFixture<ExpertsOrthopaedicexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsOrthopaedicexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsOrthopaedicexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
