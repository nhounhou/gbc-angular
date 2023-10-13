import { TestBed } from '@angular/core/testing';

import { StringingService } from './stringing.service';

describe('StringingService', () => {
  let service: StringingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
