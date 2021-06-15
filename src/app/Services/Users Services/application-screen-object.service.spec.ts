import { TestBed } from '@angular/core/testing';

import { ApplicationScreenObjectService } from './application-screen-object.service';

describe('ApplicationScreenObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationScreenObjectService = TestBed.get(ApplicationScreenObjectService);
    expect(service).toBeTruthy();
  });
});
