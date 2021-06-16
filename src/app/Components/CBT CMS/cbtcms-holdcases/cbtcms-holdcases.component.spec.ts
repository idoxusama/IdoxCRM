import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSHoldcasesComponent } from './cbtcms-holdcases.component';

describe('CBTCMSHoldcasesComponent', () => {
  let component: CBTCMSHoldcasesComponent;
  let fixture: ComponentFixture<CBTCMSHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
