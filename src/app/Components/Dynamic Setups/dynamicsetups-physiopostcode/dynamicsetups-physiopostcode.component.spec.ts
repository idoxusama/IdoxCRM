import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsetupsPhysiopostcodeComponent } from './dynamicsetups-physiopostcode.component';

describe('DynamicsetupsPhysiopostcodeComponent', () => {
  let component: DynamicsetupsPhysiopostcodeComponent;
  let fixture: ComponentFixture<DynamicsetupsPhysiopostcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsetupsPhysiopostcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsetupsPhysiopostcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
