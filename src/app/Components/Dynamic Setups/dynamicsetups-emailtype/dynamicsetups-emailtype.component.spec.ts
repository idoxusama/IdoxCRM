import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsEmailtypeComponent } from './dynamicsetups-emailtype.component';

describe('DynamicsetupsEmailtypeComponent', () => {
  let component: DynamicsetupsEmailtypeComponent;
  let fixture: ComponentFixture<DynamicsetupsEmailtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsEmailtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsEmailtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
