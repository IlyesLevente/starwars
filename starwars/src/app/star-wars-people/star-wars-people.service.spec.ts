import { TestBed } from '@angular/core/testing';

import { StarWarsPeopleService } from './star-wars-people.service';

describe('StarWarsPeopleService', () => {
  let service: StarWarsPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
