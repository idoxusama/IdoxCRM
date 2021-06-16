import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsOutstandingexaminationsComponent } from './entcms-outstandingexaminations.component';

describe('EntcmsOutstandingexaminationsComponent', () => {
  let component: EntcmsOutstandingexaminationsComponent;
  let fixture: ComponentFixture<EntcmsOutstandingexaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsOutstandingexaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsOutstandingexaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
