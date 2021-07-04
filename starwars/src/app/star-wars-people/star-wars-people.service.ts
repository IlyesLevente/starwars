import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchPeople } from '../interface/search-people';

@Injectable({
  providedIn: 'root'
})

export class StarWarsPeopleService {

  url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getCustomers(page: number): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url + '/?page=' + page)
  }
}