import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSolicitorsComponent } from './settings-solicitors.component';

describe('SettingsSolicitorsComponent', () => {
  let component: SettingsSolicitorsComponent;
  let fixture: ComponentFixture<SettingsSolicitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSolicitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSolicitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
