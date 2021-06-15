import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsStaffdiariesComponent } from './reports-staffdiaries.component';

describe('ReportsStaffdiariesComponent', () => {
  let component: ReportsStaffdiariesComponent;
  let fixture: ComponentFixture<ReportsStaffdiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsStaffdiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsStaffdiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
