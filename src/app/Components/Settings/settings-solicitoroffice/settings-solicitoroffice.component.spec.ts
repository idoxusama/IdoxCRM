import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSolicitorofficeComponent } from './settings-solicitoroffice.component';

describe('SettingsSolicitorofficeComponent', () => {
  let component: SettingsSolicitorofficeComponent;
  let fixture: ComponentFixture<SettingsSolicitorofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSolicitorofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSolicitorofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
