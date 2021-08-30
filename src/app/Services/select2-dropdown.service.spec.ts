/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Select2DropdownService } from './select2-dropdown.service';

describe('Service: Select2Dropdown', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Select2DropdownService]
    });
  });

  it('should ...', inject([Select2DropdownService], (service: Select2DropdownService) => {
    expect(service).toBeTruthy();
  }));
});
