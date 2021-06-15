import { TestBed } from '@angular/core/testing';

import { ApplicationScreenService } from './application-screen.service';

describe('ApplicationScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationScreenService = TestBed.get(ApplicationScreenService);
    expect(service).toBeTruthy();
  });
});
