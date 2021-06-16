import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisIdoxstaffkpiComponent } from './analysis-idoxstaffkpi.component';

describe('AnalysisIdoxstaffkpiComponent', () => {
  let component: AnalysisIdoxstaffkpiComponent;
  let fixture: ComponentFixture<AnalysisIdoxstaffkpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisIdoxstaffkpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisIdoxstaffkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
