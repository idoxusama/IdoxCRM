import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsInstructiongraphComponent } from './reports-instructiongraph.component';

describe('ReportsInstructiongraphComponent', () => {
  let component: ReportsInstructiongraphComponent;
  let fixture: ComponentFixture<ReportsInstructiongraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsInstructiongraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsInstructiongraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
