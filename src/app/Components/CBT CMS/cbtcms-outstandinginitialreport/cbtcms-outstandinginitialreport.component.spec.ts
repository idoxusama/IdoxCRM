import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSOutstandinginitialreportComponent } from './cbtcms-outstandinginitialreport.component';

describe('CBTCMSOutstandinginitialreportComponent', () => {
  let component: CBTCMSOutstandinginitialreportComponent;
  let fixture: ComponentFixture<CBTCMSOutstandinginitialreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSOutstandinginitialreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSOutstandinginitialreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
