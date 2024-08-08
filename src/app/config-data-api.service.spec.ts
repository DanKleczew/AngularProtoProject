import { TestBed } from '@angular/core/testing';

import { ConfigDataApiService } from './config-data-api.service';

describe('ConfigDataApiService', () => {
  let service: ConfigDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
