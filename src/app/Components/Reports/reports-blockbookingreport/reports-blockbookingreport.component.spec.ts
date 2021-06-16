import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBlockbookingreportComponent } from './reports-blockbookingreport.component';

describe('ReportsBlockbookingreportComponent', () => {
  let component: ReportsBlockbookingreportComponent;
  let fixture: ComponentFixture<ReportsBlockbookingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsBlockbookingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsBlockbookingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
