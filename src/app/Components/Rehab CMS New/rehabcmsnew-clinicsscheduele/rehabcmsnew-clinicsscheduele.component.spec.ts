import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabcmsnewClinicsschedueleComponent } from './rehabcmsnew-clinicsscheduele.component';

describe('RehabcmsnewClinicsschedueleComponent', () => {
  let component: RehabcmsnewClinicsschedueleComponent;
  let fixture: ComponentFixture<RehabcmsnewClinicsschedueleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabcmsnewClinicsschedueleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabcmsnewClinicsschedueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
