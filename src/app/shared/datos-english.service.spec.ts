import { TestBed } from '@angular/core/testing';

import { DatosEnglishService } from './datos-english.service';

describe('DatosEnglishService', () => {
  let service: DatosEnglishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEnglishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
