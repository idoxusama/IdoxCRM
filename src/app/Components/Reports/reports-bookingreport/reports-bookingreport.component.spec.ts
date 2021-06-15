import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBookingreportComponent } from './reports-bookingreport.component';

describe('ReportsBookingreportComponent', () => {
  let component: ReportsBookingreportComponent;
  let fixture: ComponentFixture<ReportsBookingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBookingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBookingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
