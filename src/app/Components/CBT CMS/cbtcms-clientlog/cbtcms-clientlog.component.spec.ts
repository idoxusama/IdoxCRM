import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSClientlogComponent } from './cbtcms-clientlog.component';

describe('CBTCMSClientlogComponent', () => {
  let component: CBTCMSClientlogComponent;
  let fixture: ComponentFixture<CBTCMSClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
