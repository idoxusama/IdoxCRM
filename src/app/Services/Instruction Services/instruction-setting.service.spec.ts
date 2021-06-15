import { TestBed } from '@angular/core/testing';

import { InstructionSettingService } from './instruction-setting.service';

describe('InstructionSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstructionSettingService = TestBed.get(InstructionSettingService);
    expect(service).toBeTruthy();
  });
});
