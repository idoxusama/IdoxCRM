import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsRehabexpertComponent } from './experts-rehabexpert.component';

describe('ExpertsRehabexpertComponent', () => {
  let component: ExpertsRehabexpertComponent;
  let fixture: ComponentFixture<ExpertsRehabexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsRehabexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsRehabexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
