import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleSpinnerService {

  isLoading$ = new BehaviorSubject<boolean>(false);

}
