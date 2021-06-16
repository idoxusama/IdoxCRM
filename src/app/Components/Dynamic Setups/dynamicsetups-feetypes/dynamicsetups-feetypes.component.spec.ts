import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsFeetypesComponent } from './dynamicsetups-feetypes.component';

describe('DynamicsetupsFeetypesComponent', () => {
  let component: DynamicsetupsFeetypesComponent;
  let fixture: ComponentFixture<DynamicsetupsFeetypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsFeetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsFeetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
