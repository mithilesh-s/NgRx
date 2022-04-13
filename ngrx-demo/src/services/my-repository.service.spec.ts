import { TestBed } from '@angular/core/testing';

import { MyRepositoryService } from './my-repository.service';

describe('MyRepositoryService', () => {
  let service: MyRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
