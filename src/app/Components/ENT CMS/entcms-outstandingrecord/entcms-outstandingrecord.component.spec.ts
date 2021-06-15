import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsOutstandingrecordComponent } from './entcms-outstandingrecord.component';

describe('EntcmsOutstandingrecordComponent', () => {
  let component: EntcmsOutstandingrecordComponent;
  let fixture: ComponentFixture<EntcmsOutstandingrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsOutstandingrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsOutstandingrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
