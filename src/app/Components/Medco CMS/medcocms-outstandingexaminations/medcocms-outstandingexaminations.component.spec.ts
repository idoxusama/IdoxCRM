import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingexaminationsComponent } from './medcocms-outstandingexaminations.component';

describe('MedcocmsOutstandingexaminationsComponent', () => {
  let component: MedcocmsOutstandingexaminationsComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
