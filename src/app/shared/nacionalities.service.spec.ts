import { TestBed } from '@angular/core/testing';

import { NacionalitiesService } from './nacionalities.service';

describe('NacionalitiesService', () => {
  let service: NacionalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NacionalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
