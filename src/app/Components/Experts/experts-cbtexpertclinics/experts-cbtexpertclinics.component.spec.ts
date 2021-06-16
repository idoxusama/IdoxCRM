import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsCbtexpertclinicsComponent } from './experts-cbtexpertclinics.component';

describe('ExpertsCbtexpertclinicsComponent', () => {
  let component: ExpertsCbtexpertclinicsComponent;
  let fixture: ComponentFixture<ExpertsCbtexpertclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsCbtexpertclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsCbtexpertclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
