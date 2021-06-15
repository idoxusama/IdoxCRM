import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpertComponent } from './newexpert.component';

describe('NewexpertComponent', () => {
  let component: NewexpertComponent;
  let fixture: ComponentFixture<NewexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
