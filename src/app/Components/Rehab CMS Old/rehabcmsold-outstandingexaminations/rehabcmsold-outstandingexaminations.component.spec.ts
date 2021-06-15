import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldOutstandingexaminationsComponent } from './rehabcmsold-outstandingexaminations.component';

describe('RehabcmsoldOutstandingexaminationsComponent', () => {
  let component: RehabcmsoldOutstandingexaminationsComponent;
  let fixture: ComponentFixture<RehabcmsoldOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
