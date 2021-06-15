import { TestBed } from '@angular/core/testing';

import { CmssectionMenuService } from './cmssection-menu.service';

describe('CmssectionMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmssectionMenuService = TestBed.get(CmssectionMenuService);
    expect(service).toBeTruthy();
  });
});
