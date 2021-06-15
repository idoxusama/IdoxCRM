import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBTCMSNewinstructionsComponent } from './cbtcms-newinstructions.component';

describe('CBTCMSNewinstructionsComponent', () => {
  let component: CBTCMSNewinstructionsComponent;
  let fixture: ComponentFixture<CBTCMSNewinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBTCMSNewinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBTCMSNewinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
