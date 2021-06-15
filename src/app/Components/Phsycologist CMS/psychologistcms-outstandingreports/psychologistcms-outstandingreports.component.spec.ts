import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsOutstandingreportsComponent } from './psychologistcms-outstandingreports.component';

describe('PsychologistcmsOutstandingreportsComponent', () => {
  let component: PsychologistcmsOutstandingreportsComponent;
  let fixture: ComponentFixture<PsychologistcmsOutstandingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsOutstandingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsOutstandingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
