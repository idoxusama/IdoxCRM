import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPerformaComponent } from './expert-performa.component';

describe('ExpertPerformaComponent', () => {
  let component: ExpertPerformaComponent;
  let fixture: ComponentFixture<ExpertPerformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPerformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertPerformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
