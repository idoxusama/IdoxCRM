import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsDocumenttypesComponent } from './dynamicsetups-documenttypes.component';

describe('DynamicsetupsDocumenttypesComponent', () => {
  let component: DynamicsetupsDocumenttypesComponent;
  let fixture: ComponentFixture<DynamicsetupsDocumenttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsDocumenttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsDocumenttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
