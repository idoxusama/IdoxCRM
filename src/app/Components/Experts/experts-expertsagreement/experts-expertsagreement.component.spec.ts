import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsExpertsagreementComponent } from './experts-expertsagreement.component';

describe('ExpertsExpertsagreementComponent', () => {
  let component: ExpertsExpertsagreementComponent;
  let fixture: ComponentFixture<ExpertsExpertsagreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsExpertsagreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsExpertsagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
