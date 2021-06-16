import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsDnahistoryComponent } from './medcocms-dnahistory.component';

describe('MedcocmsDnahistoryComponent', () => {
  let component: MedcocmsDnahistoryComponent;
  let fixture: ComponentFixture<MedcocmsDnahistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsDnahistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsDnahistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
