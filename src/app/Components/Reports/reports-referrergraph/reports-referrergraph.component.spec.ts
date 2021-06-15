import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsReferrergraphComponent } from './reports-referrergraph.component';

describe('ReportsReferrergraphComponent', () => {
  let component: ReportsReferrergraphComponent;
  let fixture: ComponentFixture<ReportsReferrergraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsReferrergraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsReferrergraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
