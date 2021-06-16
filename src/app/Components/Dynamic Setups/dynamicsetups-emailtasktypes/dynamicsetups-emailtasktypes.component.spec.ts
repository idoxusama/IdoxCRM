import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsEmailtasktypesComponent } from './dynamicsetups-emailtasktypes.component';

describe('DynamicsetupsEmailtasktypesComponent', () => {
  let component: DynamicsetupsEmailtasktypesComponent;
  let fixture: ComponentFixture<DynamicsetupsEmailtasktypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsEmailtasktypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsEmailtasktypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
