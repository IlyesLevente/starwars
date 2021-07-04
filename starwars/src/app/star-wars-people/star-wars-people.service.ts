import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchPeople } from '../interface/search-people';
import { map, finalize } from 'rxjs/operators';
import { SpinnerService } from '../service/spinner.service';

@Injectable({
  providedIn: 'root'
})

export class StarWarsPeopleService {

  url = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient,
              private spinnerService: SpinnerService) { }

  getPeople(page: number): Observable<SearchPeople> {
    this.spinnerService.isLoading$.next(true);
    return this.http.get<SearchPeople>(this.url + '/?page=' + page).
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
    return this.http.get<SearchPeople>(this.url + '?search=' + name).
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