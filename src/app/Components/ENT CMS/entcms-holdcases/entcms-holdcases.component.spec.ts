import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsHoldcasesComponent } from './entcms-holdcases.component';

describe('EntcmsHoldcasesComponent', () => {
  let component: EntcmsHoldcasesComponent;
  let fixture: ComponentFixture<EntcmsHoldcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsHoldcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsHoldcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
