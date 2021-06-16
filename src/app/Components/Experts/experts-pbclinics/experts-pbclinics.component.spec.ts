import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsPbclinicsComponent } from './experts-pbclinics.component';

describe('ExpertsPbclinicsComponent', () => {
  let component: ExpertsPbclinicsComponent;
  let fixture: ComponentFixture<ExpertsPbclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsPbclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsPbclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
