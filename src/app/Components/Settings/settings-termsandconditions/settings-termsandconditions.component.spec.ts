import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTermsandconditionsComponent } from './settings-termsandconditions.component';

describe('SettingsTermsandconditionsComponent', () => {
  let component: SettingsTermsandconditionsComponent;
  let fixture: ComponentFixture<SettingsTermsandconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTermsandconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTermsandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
