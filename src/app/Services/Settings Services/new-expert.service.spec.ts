import { TestBed } from '@angular/core/testing';

import { NewExpertService } from './new-expert.service';

describe('NewExpertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewExpertService = TestBed.get(NewExpertService);
    expect(service).toBeTruthy();
  });
});
