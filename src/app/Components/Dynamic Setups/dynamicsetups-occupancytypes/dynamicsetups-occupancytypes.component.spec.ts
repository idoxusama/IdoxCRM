import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsOccupancytypesComponent } from './dynamicsetups-occupancytypes.component';

describe('DynamicsetupsOccupancytypesComponent', () => {
  let component: DynamicsetupsOccupancytypesComponent;
  let fixture: ComponentFixture<DynamicsetupsOccupancytypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsOccupancytypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsOccupancytypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
