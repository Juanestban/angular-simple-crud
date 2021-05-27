import { TestBed } from '@angular/core/testing';

import { TestComService } from './test-com.service';

describe('TestComService', () => {
  let service: TestComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
