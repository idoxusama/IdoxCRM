import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsPreviousclinicsComponent } from './psychologistcms-previousclinics.component';

describe('PsychologistcmsPreviousclinicsComponent', () => {
  let component: PsychologistcmsPreviousclinicsComponent;
  let fixture: ComponentFixture<PsychologistcmsPreviousclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsPreviousclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsPreviousclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
