import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewOutstandinginitialreportComponent } from './rehabcmsnew-outstandinginitialreport.component';

describe('RehabcmsnewOutstandinginitialreportComponent', () => {
  let component: RehabcmsnewOutstandinginitialreportComponent;
  let fixture: ComponentFixture<RehabcmsnewOutstandinginitialreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewOutstandinginitialreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewOutstandinginitialreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
