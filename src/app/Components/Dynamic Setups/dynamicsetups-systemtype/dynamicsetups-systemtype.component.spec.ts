import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsSystemtypeComponent } from './dynamicsetups-systemtype.component';

describe('DynamicsetupsSystemtypeComponent', () => {
  let component: DynamicsetupsSystemtypeComponent;
  let fixture: ComponentFixture<DynamicsetupsSystemtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsSystemtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsSystemtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
