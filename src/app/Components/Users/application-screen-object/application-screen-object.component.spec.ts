import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationScreenObjectComponent } from './application-screen-object.component';

describe('ApplicationScreenObjectComponent', () => {
  let component: ApplicationScreenObjectComponent;
  let fixture: ComponentFixture<ApplicationScreenObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationScreenObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationScreenObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
