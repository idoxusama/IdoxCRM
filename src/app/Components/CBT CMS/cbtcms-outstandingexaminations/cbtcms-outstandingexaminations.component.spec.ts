import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSOutstandingexaminationsComponent } from './cbtcms-outstandingexaminations.component';

describe('CBTCMSOutstandingexaminationsComponent', () => {
  let component: CBTCMSOutstandingexaminationsComponent;
  let fixture: ComponentFixture<CBTCMSOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
