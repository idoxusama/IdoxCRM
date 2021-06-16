import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsSpecialitiesComponent } from './dynamicsetups-specialities.component';

describe('DynamicsetupsSpecialitiesComponent', () => {
  let component: DynamicsetupsSpecialitiesComponent;
  let fixture: ComponentFixture<DynamicsetupsSpecialitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsSpecialitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
