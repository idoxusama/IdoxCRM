import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsOutstandingreportsComponent } from './entcms-outstandingreports.component';

describe('EntcmsOutstandingreportsComponent', () => {
  let component: EntcmsOutstandingreportsComponent;
  let fixture: ComponentFixture<EntcmsOutstandingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsOutstandingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsOutstandingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
