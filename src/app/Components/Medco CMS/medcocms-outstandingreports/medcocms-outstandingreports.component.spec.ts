import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandingreportsComponent } from './medcocms-outstandingreports.component';

describe('MedcocmsOutstandingreportsComponent', () => {
  let component: MedcocmsOutstandingreportsComponent;
  let fixture: ComponentFixture<MedcocmsOutstandingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
