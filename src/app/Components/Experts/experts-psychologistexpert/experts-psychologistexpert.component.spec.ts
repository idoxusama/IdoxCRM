import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsPsychologistexpertComponent } from './experts-psychologistexpert.component';

describe('ExpertsPsychologistexpertComponent', () => {
  let component: ExpertsPsychologistexpertComponent;
  let fixture: ComponentFixture<ExpertsPsychologistexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsPsychologistexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsPsychologistexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
