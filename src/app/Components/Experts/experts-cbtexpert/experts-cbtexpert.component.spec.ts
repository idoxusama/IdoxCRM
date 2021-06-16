import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsCbtexpertComponent } from './experts-cbtexpert.component';

describe('ExpertsCbtexpertComponent', () => {
  let component: ExpertsCbtexpertComponent;
  let fixture: ComponentFixture<ExpertsCbtexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsCbtexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsCbtexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
