import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsClientlogComponent } from './medcocms-clientlog.component';

describe('MedcocmsClientlogComponent', () => {
  let component: MedcocmsClientlogComponent;
  let fixture: ComponentFixture<MedcocmsClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
