import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsStatusreportComponent } from './psychologistcms-statusreport.component';

describe('PsychologistcmsStatusreportComponent', () => {
  let component: PsychologistcmsStatusreportComponent;
  let fixture: ComponentFixture<PsychologistcmsStatusreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsStatusreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsStatusreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
