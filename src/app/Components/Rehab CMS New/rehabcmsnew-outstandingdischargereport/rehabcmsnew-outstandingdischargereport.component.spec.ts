import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewOutstandingdischargereportComponent } from './rehabcmsnew-outstandingdischargereport.component';

describe('RehabcmsnewOutstandingdischargereportComponent', () => {
  let component: RehabcmsnewOutstandingdischargereportComponent;
  let fixture: ComponentFixture<RehabcmsnewOutstandingdischargereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewOutstandingdischargereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewOutstandingdischargereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
