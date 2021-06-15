import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsPsychologistvenueComponent } from './experts-psychologistvenue.component';

describe('ExpertsPsychologistvenueComponent', () => {
  let component: ExpertsPsychologistvenueComponent;
  let fixture: ComponentFixture<ExpertsPsychologistvenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsPsychologistvenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsPsychologistvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
