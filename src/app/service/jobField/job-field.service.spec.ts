import { TestBed } from '@angular/core/testing';

import { JobFieldService } from './job-field.service';

describe('JobFieldService', () => {
  let service: JobFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
