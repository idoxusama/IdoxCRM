import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBookinggraphComponent } from './reports-bookinggraph.component';

describe('ReportsBookinggraphComponent', () => {
  let component: ReportsBookinggraphComponent;
  let fixture: ComponentFixture<ReportsBookinggraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBookinggraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBookinggraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
