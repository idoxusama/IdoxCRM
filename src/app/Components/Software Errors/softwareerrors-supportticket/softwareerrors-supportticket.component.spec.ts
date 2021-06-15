import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareerrorsSupportticketComponent } from './softwareerrors-supportticket.component';

describe('SoftwareerrorsSupportticketComponent', () => {
  let component: SoftwareerrorsSupportticketComponent;
  let fixture: ComponentFixture<SoftwareerrorsSupportticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareerrorsSupportticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareerrorsSupportticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
