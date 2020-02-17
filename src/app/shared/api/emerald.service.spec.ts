import { TestBed } from '@angular/core/testing';

import { EmeraldService } from './emerald.service';

describe('EmeraldService', () => {
  let service: EmeraldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmeraldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
