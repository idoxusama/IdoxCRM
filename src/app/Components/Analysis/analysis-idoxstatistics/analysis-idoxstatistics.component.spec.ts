import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisIdoxstatisticsComponent } from './analysis-idoxstatistics.component';

describe('AnalysisIdoxstatisticsComponent', () => {
  let component: AnalysisIdoxstatisticsComponent;
  let fixture: ComponentFixture<AnalysisIdoxstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisIdoxstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisIdoxstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
