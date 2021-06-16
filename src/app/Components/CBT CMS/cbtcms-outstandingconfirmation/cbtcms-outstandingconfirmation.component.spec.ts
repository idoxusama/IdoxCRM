import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSOutstandingconfirmationComponent } from './cbtcms-outstandingconfirmation.component';

describe('CBTCMSOutstandingconfirmationComponent', () => {
  let component: CBTCMSOutstandingconfirmationComponent;
  let fixture: ComponentFixture<CBTCMSOutstandingconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSOutstandingconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSOutstandingconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
