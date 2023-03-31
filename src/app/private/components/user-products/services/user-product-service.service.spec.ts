import { TestBed } from '@angular/core/testing';

import { UserProductServiceService } from './user-product-service.service';

describe('UserProductServiceService', () => {
  let service: UserProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
