import { TestBed } from '@angular/core/testing';
import { SharedMockData } from '../../core/mock/shared-mock-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the id from url', () => {
    const searchPeople = service.setId(SharedMockData.getSearchPeopleDatasMock());
    expect(searchPeople.results[0].id).toEqual(1);
  });

});
