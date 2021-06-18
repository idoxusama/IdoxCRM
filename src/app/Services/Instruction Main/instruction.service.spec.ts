/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstructionService } from './instruction.service';

describe('Service: Instruction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructionService]
    });
  });

  it('should ...', inject([InstructionService], (service: InstructionService) => {
    expect(service).toBeTruthy();
  }));
});
