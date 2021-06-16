import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSOutstandingdischargereportComponent } from './cbtcms-outstandingdischargereport.component';

describe('CBTCMSOutstandingdischargereportComponent', () => {
  let component: CBTCMSOutstandingdischargereportComponent;
  let fixture: ComponentFixture<CBTCMSOutstandingdischargereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSOutstandingdischargereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSOutstandingdischargereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
