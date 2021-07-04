import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchPeople } from '../interface/search-people';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StarWarsPeopleService {

  url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) { }

  getPeople(page: number): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url + '/?page=' + page).
      pipe(
       map((data: SearchPeople) => {
         return this.setId(data);
      }))
  }

  search(name: string): Observable<SearchPeople> {
    return this.http.get<SearchPeople>(this.url + '?search=' + name).
      pipe(
      map((data: SearchPeople) => {
        return this.setId(data);
      }))
  }

  setId(data: SearchPeople): SearchPeople {
    data.results.forEach(result => {
      result.id = Number(result.url.split(/\//)[5]);
    })
    return data;
  }
}