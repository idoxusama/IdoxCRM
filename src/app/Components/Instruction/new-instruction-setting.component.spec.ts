import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstructionSettingComponent } from './new-instruction-setting.component';

describe('NewInstructionSettingComponent', () => {
  let component: NewInstructionSettingComponent;
  let fixture: ComponentFixture<NewInstructionSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInstructionSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstructionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
