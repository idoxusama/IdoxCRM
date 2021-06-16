import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsClinicsschedueleComponent } from './medcocms-clinicsscheduele.component';

describe('MedcocmsClinicsschedueleComponent', () => {
  let component: MedcocmsClinicsschedueleComponent;
  let fixture: ComponentFixture<MedcocmsClinicsschedueleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsClinicsschedueleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsClinicsschedueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
