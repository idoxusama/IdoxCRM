import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsExpertavailabilitysettingsComponent } from './settings-expertavailabilitysettings.component';

describe('SettingsExpertavailabilitysettingsComponent', () => {
  let component: SettingsExpertavailabilitysettingsComponent;
  let fixture: ComponentFixture<SettingsExpertavailabilitysettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsExpertavailabilitysettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsExpertavailabilitysettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
