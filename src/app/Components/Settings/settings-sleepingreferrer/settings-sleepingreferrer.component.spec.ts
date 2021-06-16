import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSleepingreferrerComponent } from './settings-sleepingreferrer.component';

describe('SettingsSleepingreferrerComponent', () => {
  let component: SettingsSleepingreferrerComponent;
  let fixture: ComponentFixture<SettingsSleepingreferrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSleepingreferrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSleepingreferrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
