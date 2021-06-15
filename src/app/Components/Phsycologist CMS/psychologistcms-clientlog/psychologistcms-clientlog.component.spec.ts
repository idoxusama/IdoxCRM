import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsClientlogComponent } from './psychologistcms-clientlog.component';

describe('PsychologistcmsClientlogComponent', () => {
  let component: PsychologistcmsClientlogComponent;
  let fixture: ComponentFixture<PsychologistcmsClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
