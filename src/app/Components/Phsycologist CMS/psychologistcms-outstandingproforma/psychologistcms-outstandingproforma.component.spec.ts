import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingproformaComponent } from './psychologistcms-outstandingproforma.component';

describe('PsychologistcmsOutstandingproformaComponent', () => {
  let component: PsychologistcmsOutstandingproformaComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
