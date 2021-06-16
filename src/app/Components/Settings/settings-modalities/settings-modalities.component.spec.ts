import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModalitiesComponent } from './settings-modalities.component';

describe('SettingsModalitiesComponent', () => {
  let component: SettingsModalitiesComponent;
  let fixture: ComponentFixture<SettingsModalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsModalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
