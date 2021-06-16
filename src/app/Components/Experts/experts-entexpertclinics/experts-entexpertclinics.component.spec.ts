import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsEntexpertclinicsComponent } from './experts-entexpertclinics.component';

describe('ExpertsEntexpertclinicsComponent', () => {
  let component: ExpertsEntexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsEntexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsEntexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsEntexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
