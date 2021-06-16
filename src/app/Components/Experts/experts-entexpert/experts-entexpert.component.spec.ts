import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsEntexpertComponent } from './experts-entexpert.component';

describe('ExpertsEntexpertComponent', () => {
  let component: ExpertsEntexpertComponent;
  let fixture: ComponentFixture<ExpertsEntexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsEntexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsEntexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
