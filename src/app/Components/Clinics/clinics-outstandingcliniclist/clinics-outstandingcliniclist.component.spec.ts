import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsOutstandingcliniclistComponent } from './clinics-outstandingcliniclist.component';

describe('ClinicsOutstandingcliniclistComponent', () => {
  let component: ClinicsOutstandingcliniclistComponent;
  let fixture: ComponentFixture<ClinicsOutstandingcliniclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsOutstandingcliniclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsOutstandingcliniclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
