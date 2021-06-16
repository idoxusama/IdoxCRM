import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSUndertreatmentComponent } from './cbtcms-undertreatment.component';

describe('CBTCMSUndertreatmentComponent', () => {
  let component: CBTCMSUndertreatmentComponent;
  let fixture: ComponentFixture<CBTCMSUndertreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSUndertreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSUndertreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
