import { TestBed } from '@angular/core/testing';

import { FindJobService } from './find-job.service';

describe('FindJobService', () => {
  let service: FindJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
