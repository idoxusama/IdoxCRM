import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsErrortypeComponent } from './dynamicsetups-errortype.component';

describe('DynamicsetupsErrortypeComponent', () => {
  let component: DynamicsetupsErrortypeComponent;
  let fixture: ComponentFixture<DynamicsetupsErrortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsErrortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsErrortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
