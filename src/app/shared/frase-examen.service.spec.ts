import { TestBed } from '@angular/core/testing';

import { FraseExamenService } from './frase-examen.service';

describe('FraseExamenService', () => {
  let service: FraseExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
