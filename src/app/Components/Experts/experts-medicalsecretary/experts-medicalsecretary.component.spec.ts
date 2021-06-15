import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsMedicalsecretaryComponent } from './experts-medicalsecretary.component';

describe('ExpertsMedicalsecretaryComponent', () => {
  let component: ExpertsMedicalsecretaryComponent;
  let fixture: ComponentFixture<ExpertsMedicalsecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsMedicalsecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsMedicalsecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
