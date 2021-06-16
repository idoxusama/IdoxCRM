import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsDnalistComponent } from './entcms-dnalist.component';

describe('EntcmsDnalistComponent', () => {
  let component: EntcmsDnalistComponent;
  let fixture: ComponentFixture<EntcmsDnalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsDnalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsDnalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
