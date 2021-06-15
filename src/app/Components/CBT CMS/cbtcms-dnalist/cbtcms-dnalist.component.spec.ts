import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSDnalistComponent } from './cbtcms-dnalist.component';

describe('CBTCMSDnalistComponent', () => {
  let component: CBTCMSDnalistComponent;
  let fixture: ComponentFixture<CBTCMSDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
