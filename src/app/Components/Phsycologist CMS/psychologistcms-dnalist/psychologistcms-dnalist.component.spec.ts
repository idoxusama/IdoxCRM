import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsDnalistComponent } from './psychologistcms-dnalist.component';

describe('PsychologistcmsDnalistComponent', () => {
  let component: PsychologistcmsDnalistComponent;
  let fixture: ComponentFixture<PsychologistcmsDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
