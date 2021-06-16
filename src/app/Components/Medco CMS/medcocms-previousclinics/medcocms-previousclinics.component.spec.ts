import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsPreviousclinicsComponent } from './medcocms-previousclinics.component';

describe('MedcocmsPreviousclinicsComponent', () => {
  let component: MedcocmsPreviousclinicsComponent;
  let fixture: ComponentFixture<MedcocmsPreviousclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsPreviousclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsPreviousclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
