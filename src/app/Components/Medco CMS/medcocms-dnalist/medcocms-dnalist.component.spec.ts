import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsDnalistComponent } from './medcocms-dnalist.component';

describe('MedcocmsDnalistComponent', () => {
  let component: MedcocmsDnalistComponent;
  let fixture: ComponentFixture<MedcocmsDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
