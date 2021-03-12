import { TestBed } from '@angular/core/testing';

import { ComputingService } from './computing.service';

describe('ComputingService', () => {
  let service: ComputingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
