import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsGeographicalcoverageComponent } from './dynamicsetups-geographicalcoverage.component';

describe('DynamicsetupsGeographicalcoverageComponent', () => {
  let component: DynamicsetupsGeographicalcoverageComponent;
  let fixture: ComponentFixture<DynamicsetupsGeographicalcoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsGeographicalcoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsGeographicalcoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
