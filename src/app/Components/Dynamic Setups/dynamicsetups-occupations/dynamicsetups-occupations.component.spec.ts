import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsOccupationsComponent } from './dynamicsetups-occupations.component';

describe('DynamicsetupsOccupationsComponent', () => {
  let component: DynamicsetupsOccupationsComponent;
  let fixture: ComponentFixture<DynamicsetupsOccupationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsOccupationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsOccupationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
