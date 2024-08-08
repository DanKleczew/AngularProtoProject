import { TestBed } from '@angular/core/testing';

import { ContentsDataApiService } from './contents-data-api.service';

describe('ContentsDataApiService', () => {
  let service: ContentsDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentsDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
