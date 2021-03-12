import { TestBed } from '@angular/core/testing';

import { PalabrasService } from './palabras.service';

describe('PalabrasService', () => {
  let service: PalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
