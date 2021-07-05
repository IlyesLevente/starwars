import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchPeople } from '../models/search-people';
import { map, finalize } from 'rxjs/operators';
import { PeopleSpinnerService } from './people-spinner.service';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient,
              private spinnerService: PeopleSpinnerService) { }

  getPeople(page: number): Observable<SearchPeople> {
    this.spinnerService.isLoading$.next(true);
    return this.http.get<SearchPeople>(`${this.url}/?page=${page}`).
      pipe(
        map((data: SearchPeople) => {
          return this.setId(data);
        }),
        finalize( () => {
          this.spinnerService.isLoading$.next(false);
        }
    ))
  }

  search(name: string): Observable<SearchPeople> {
    this.spinnerService.isLoading$.next(true);
    return this.http.get<SearchPeople>(`${this.url}/?search=${name}`).
      pipe(
        map((data: SearchPeople) => {
          return this.setId(data);
        }),
        finalize( () => {
          this.spinnerService.isLoading$.next(false);
        })
      )
  }

  setId(data: SearchPeople): SearchPeople {
    data.results.forEach(result => {
      result.id = Number(result.url.split(/\//)[5]);
    })
    return data;
  }
}