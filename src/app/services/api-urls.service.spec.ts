import { TestBed } from '@angular/core/testing';

import { ApiUrlsService } from './api-urls.service';

describe('ApiUrlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUrlsService = TestBed.get(ApiUrlsService);
    expect(service).toBeTruthy();
  });
});
