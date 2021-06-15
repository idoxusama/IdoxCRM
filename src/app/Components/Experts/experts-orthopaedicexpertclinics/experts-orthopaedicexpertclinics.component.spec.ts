import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsOrthopaedicexpertclinicsComponent } from './experts-orthopaedicexpertclinics.component';

describe('ExpertsOrthopaedicexpertclinicsComponent', () => {
  let component: ExpertsOrthopaedicexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsOrthopaedicexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsOrthopaedicexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsOrthopaedicexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
