import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsOutstandingamendmentsComponent } from './entcms-outstandingamendments.component';

describe('EntcmsOutstandingamendmentsComponent', () => {
  let component: EntcmsOutstandingamendmentsComponent;
  let fixture: ComponentFixture<EntcmsOutstandingamendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsOutstandingamendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsOutstandingamendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
