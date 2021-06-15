import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsFutureclinicrequiredComponent } from './clinics-futureclinicrequired.component';

describe('ClinicsFutureclinicrequiredComponent', () => {
  let component: ClinicsFutureclinicrequiredComponent;
  let fixture: ComponentFixture<ClinicsFutureclinicrequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsFutureclinicrequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsFutureclinicrequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
