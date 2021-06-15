import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsUserComponent } from './experts-user.component';

describe('ExpertsUserComponent', () => {
  let component: ExpertsUserComponent;
  let fixture: ComponentFixture<ExpertsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
