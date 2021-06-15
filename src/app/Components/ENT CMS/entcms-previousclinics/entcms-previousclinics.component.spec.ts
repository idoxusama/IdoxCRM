import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsPreviousclinicsComponent } from './entcms-previousclinics.component';

describe('EntcmsPreviousclinicsComponent', () => {
  let component: EntcmsPreviousclinicsComponent;
  let fixture: ComponentFixture<EntcmsPreviousclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsPreviousclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsPreviousclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
