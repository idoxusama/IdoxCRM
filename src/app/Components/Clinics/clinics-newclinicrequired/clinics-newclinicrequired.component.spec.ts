import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsNewclinicrequiredComponent } from './clinics-newclinicrequired.component';

describe('ClinicsNewclinicrequiredComponent', () => {
  let component: ClinicsNewclinicrequiredComponent;
  let fixture: ComponentFixture<ClinicsNewclinicrequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsNewclinicrequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsNewclinicrequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
