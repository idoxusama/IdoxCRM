import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsOutstandinggprecordreviewComponent } from './medcocms-outstandinggprecordreview.component';

describe('MedcocmsOutstandinggprecordreviewComponent', () => {
  let component: MedcocmsOutstandinggprecordreviewComponent;
  let fixture: ComponentFixture<MedcocmsOutstandinggprecordreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsOutstandinggprecordreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsOutstandinggprecordreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
