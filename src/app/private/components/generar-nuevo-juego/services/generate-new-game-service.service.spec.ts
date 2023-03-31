import { TestBed } from '@angular/core/testing';

import { GenerateNewGameServiceService } from './generate-new-game-service.service';

describe('GenerateNewGameServiceService', () => {
  let service: GenerateNewGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateNewGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
