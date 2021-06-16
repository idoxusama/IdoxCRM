import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistcmsAwaitingvideoapprovalComponent } from './psychologistcms-awaitingvideoapproval.component';

describe('PsychologistcmsAwaitingvideoapprovalComponent', () => {
  let component: PsychologistcmsAwaitingvideoapprovalComponent;
  let fixture: ComponentFixture<PsychologistcmsAwaitingvideoapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistcmsAwaitingvideoapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistcmsAwaitingvideoapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
