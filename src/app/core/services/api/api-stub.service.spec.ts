import { TestBed } from '@angular/core/testing';

import { ApiStubService } from './api-stub.service';

describe('ApiStubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiStubService = TestBed.get(ApiStubService);
    expect(service).toBeTruthy();
  });
});
