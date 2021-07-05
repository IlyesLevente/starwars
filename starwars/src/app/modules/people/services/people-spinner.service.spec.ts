import { TestBed } from '@angular/core/testing';

import { PeopleSpinnerService } from './people-spinner.service';

describe('PeopleSpinnerService', () => {
  let service: PeopleSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
