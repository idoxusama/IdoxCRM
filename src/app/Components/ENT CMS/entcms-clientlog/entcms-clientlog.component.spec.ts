import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsClientlogComponent } from './entcms-clientlog.component';

describe('EntcmsClientlogComponent', () => {
  let component: EntcmsClientlogComponent;
  let fixture: ComponentFixture<EntcmsClientlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsClientlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsClientlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
