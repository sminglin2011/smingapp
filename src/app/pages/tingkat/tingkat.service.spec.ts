import { TestBed, inject } from '@angular/core/testing';

import { TingkatService } from './tingkat.service';

describe('TingkatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TingkatService]
    });
  });

  it('should be created', inject([TingkatService], (service: TingkatService) => {
    expect(service).toBeTruthy();
  }));
});
