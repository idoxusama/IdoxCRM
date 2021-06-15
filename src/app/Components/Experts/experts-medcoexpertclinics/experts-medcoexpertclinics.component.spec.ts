import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsMedcoexpertclinicsComponent } from './experts-medcoexpertclinics.component';

describe('ExpertsMedcoexpertclinicsComponent', () => {
  let component: ExpertsMedcoexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsMedcoexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsMedcoexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsMedcoexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
