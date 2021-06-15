import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsMedcoexpertComponent } from './experts-medcoexpert.component';

describe('ExpertsMedcoexpertComponent', () => {
  let component: ExpertsMedcoexpertComponent;
  let fixture: ComponentFixture<ExpertsMedcoexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsMedcoexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsMedcoexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
