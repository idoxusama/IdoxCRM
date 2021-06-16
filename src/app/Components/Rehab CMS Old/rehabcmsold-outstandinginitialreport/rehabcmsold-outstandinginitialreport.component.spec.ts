import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsoldOutstandinginitialreportComponent } from './rehabcmsold-outstandinginitialreport.component';

describe('RehabcmsoldOutstandinginitialreportComponent', () => {
  let component: RehabcmsoldOutstandinginitialreportComponent;
  let fixture: ComponentFixture<RehabcmsoldOutstandinginitialreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsoldOutstandinginitialreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsoldOutstandinginitialreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
