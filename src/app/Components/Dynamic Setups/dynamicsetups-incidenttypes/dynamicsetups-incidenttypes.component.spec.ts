import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsIncidenttypesComponent } from './dynamicsetups-incidenttypes.component';

describe('DynamicsetupsIncidenttypesComponent', () => {
  let component: DynamicsetupsIncidenttypesComponent;
  let fixture: ComponentFixture<DynamicsetupsIncidenttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsIncidenttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsIncidenttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
