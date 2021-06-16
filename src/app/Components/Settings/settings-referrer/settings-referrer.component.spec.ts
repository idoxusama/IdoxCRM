import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReferrerComponent } from './settings-referrer.component';

describe('SettingsReferrerComponent', () => {
  let component: SettingsReferrerComponent;
  let fixture: ComponentFixture<SettingsReferrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsReferrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReferrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
