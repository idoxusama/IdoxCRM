import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsMedicalexpertdocumentsComponent } from './medcocms-medicalexpertdocuments.component';

describe('MedcocmsMedicalexpertdocumentsComponent', () => {
  let component: MedcocmsMedicalexpertdocumentsComponent;
  let fixture: ComponentFixture<MedcocmsMedicalexpertdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsMedicalexpertdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsMedicalexpertdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
