import { TestBed } from '@angular/core/testing';
import { SharedMockData } from '../interface/shared-mock-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarWarsPeopleService } from './star-wars-people.service';

describe('StarWarsPeopleService', () => {
  let service: StarWarsPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarWarsPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the id from url', () => {
    const searchPeople = service.setId(SharedMockData.getSearchPeopleDatasMock());
    expect(searchPeople.results[0].id).toEqual(1);
  });
});
