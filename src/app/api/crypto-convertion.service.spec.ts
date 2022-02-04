import { TestBed } from '@angular/core/testing';

import { CryptoConvertionService } from './crypto-convertion.service';

describe('CryptoConvertionService', () => {
  let service: CryptoConvertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoConvertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
