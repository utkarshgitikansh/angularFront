import { TestBed, inject } from '@angular/core/testing';

import { DataInfoService } from './data-info.service';

describe('DataInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataInfoService]
    });
  });

  it('should be created', inject([DataInfoService], (service: DataInfoService) => {
    expect(service).toBeTruthy();
  }));
});
