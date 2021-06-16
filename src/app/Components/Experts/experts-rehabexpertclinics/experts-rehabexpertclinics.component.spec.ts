import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsRehabexpertclinicsComponent } from './experts-rehabexpertclinics.component';

describe('ExpertsRehabexpertclinicsComponent', () => {
  let component: ExpertsRehabexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsRehabexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsRehabexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsRehabexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
