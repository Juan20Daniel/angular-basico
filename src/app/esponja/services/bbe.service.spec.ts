import { TestBed } from '@angular/core/testing';

import { BbeService } from './bbe.service';

describe('BbeService', () => {
  let service: BbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
