import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsReferrerstatisticsComponent } from './reports-referrerstatistics.component';

describe('ReportsReferrerstatisticsComponent', () => {
  let component: ReportsReferrerstatisticsComponent;
  let fixture: ComponentFixture<ReportsReferrerstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsReferrerstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReferrerstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
