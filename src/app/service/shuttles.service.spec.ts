import { TestBed } from '@angular/core/testing';

import { ShuttlesService } from './shuttles.service';

describe('ShuttlesService', () => {
  let service: ShuttlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuttlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
