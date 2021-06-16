import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewOutstandingexaminationsComponent } from './rehabcmsnew-outstandingexaminations.component';

describe('RehabcmsnewOutstandingexaminationsComponent', () => {
  let component: RehabcmsnewOutstandingexaminationsComponent;
  let fixture: ComponentFixture<RehabcmsnewOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
