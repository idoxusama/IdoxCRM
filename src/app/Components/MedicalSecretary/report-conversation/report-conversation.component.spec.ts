/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportConversationComponent } from './report-conversation.component';

describe('ReportConversationComponent', () => {
  let component: ReportConversationComponent;
  let fixture: ComponentFixture<ReportConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
