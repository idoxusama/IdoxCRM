import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsClinicschedueleComponent } from './entcms-clinicscheduele.component';

describe('EntcmsClinicschedueleComponent', () => {
  let component: EntcmsClinicschedueleComponent;
  let fixture: ComponentFixture<EntcmsClinicschedueleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsClinicschedueleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsClinicschedueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
