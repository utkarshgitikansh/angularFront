import { TestBed } from '@angular/core/testing';

import { TravelDataService } from './travel-data.service';

describe('TravelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelDataService = TestBed.get(TravelDataService);
    expect(service).toBeTruthy();
  });
});
