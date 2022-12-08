import { TestBed } from '@angular/core/testing';

import { TokenIntecepterService } from './token-intecepter.service';

describe('TokenIntecepterService', () => {
  let service: TokenIntecepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntecepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
