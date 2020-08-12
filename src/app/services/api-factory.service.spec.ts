import { TestBed } from '@angular/core/testing';

import { ApiFactoryService } from './api-factory.service';

describe('ApiFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFactoryService = TestBed.get(ApiFactoryService);
    expect(service).toBeTruthy();
  });
});
