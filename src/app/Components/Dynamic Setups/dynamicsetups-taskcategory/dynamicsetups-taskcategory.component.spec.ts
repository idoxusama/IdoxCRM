import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsTaskcategoryComponent } from './dynamicsetups-taskcategory.component';

describe('DynamicsetupsTaskcategoryComponent', () => {
  let component: DynamicsetupsTaskcategoryComponent;
  let fixture: ComponentFixture<DynamicsetupsTaskcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsTaskcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsTaskcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
