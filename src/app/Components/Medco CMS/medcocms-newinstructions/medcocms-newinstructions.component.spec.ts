import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcocmsNewinstructionsComponent } from './medcocms-newinstructions.component';

describe('MedcocmsNewinstructionsComponent', () => {
  let component: MedcocmsNewinstructionsComponent;
  let fixture: ComponentFixture<MedcocmsNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcocmsNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcocmsNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
