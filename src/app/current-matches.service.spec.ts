import { TestBed } from '@angular/core/testing';

import { CurrentMatchesService } from './current-matches.service';

describe('CurrentMatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentMatchesService = TestBed.get(CurrentMatchesService);
    expect(service).toBeTruthy();
  });
});
