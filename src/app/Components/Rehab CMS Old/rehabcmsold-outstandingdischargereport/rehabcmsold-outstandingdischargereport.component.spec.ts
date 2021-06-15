import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldOutstandingdischargereportComponent } from './rehabcmsold-outstandingdischargereport.component';

describe('RehabcmsoldOutstandingdischargereportComponent', () => {
  let component: RehabcmsoldOutstandingdischargereportComponent;
  let fixture: ComponentFixture<RehabcmsoldOutstandingdischargereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldOutstandingdischargereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldOutstandingdischargereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
