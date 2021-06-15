import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsPsychologistexpertclinicsComponent } from './experts-psychologistexpertclinics.component';

describe('ExpertsPsychologistexpertclinicsComponent', () => {
  let component: ExpertsPsychologistexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsPsychologistexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsPsychologistexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsPsychologistexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
