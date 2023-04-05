import { TestBed } from '@angular/core/testing';

import { MyProfilePrivServiceService } from './my-profile-priv-service.service';

describe('MyProfilePrivServiceService', () => {
  let service: MyProfilePrivServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProfilePrivServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
