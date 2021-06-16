import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAgreementComponent } from './settings-agreement.component';

describe('SettingsAgreementComponent', () => {
  let component: SettingsAgreementComponent;
  let fixture: ComponentFixture<SettingsAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
