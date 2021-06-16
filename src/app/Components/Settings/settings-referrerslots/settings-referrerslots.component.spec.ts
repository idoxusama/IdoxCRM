import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReferrerslotsComponent } from './settings-referrerslots.component';

describe('SettingsReferrerslotsComponent', () => {
  let component: SettingsReferrerslotsComponent;
  let fixture: ComponentFixture<SettingsReferrerslotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsReferrerslotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReferrerslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
