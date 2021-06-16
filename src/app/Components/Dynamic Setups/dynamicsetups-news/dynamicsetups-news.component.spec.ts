import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsNewsComponent } from './dynamicsetups-news.component';

describe('DynamicsetupsNewsComponent', () => {
  let component: DynamicsetupsNewsComponent;
  let fixture: ComponentFixture<DynamicsetupsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
