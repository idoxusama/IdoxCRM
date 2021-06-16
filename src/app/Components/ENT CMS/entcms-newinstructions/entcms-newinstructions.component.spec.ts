import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntcmsNewinstructionsComponent } from './entcms-newinstructions.component';

describe('EntcmsNewinstructionsComponent', () => {
  let component: EntcmsNewinstructionsComponent;
  let fixture: ComponentFixture<EntcmsNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntcmsNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntcmsNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
