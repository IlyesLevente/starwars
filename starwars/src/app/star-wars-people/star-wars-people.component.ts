import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleService } from './star-wars-people.service';
import { People } from '../interface/people';
import { SearchPeople } from '../interface/search-people';

@Component({
  selector: 'app-star-wars-people',
  templateUrl: './star-wars-people.component.html',
  styleUrls: ['./star-wars-people.component.scss']
})
export class StarWarsPeopleComponent implements OnInit {
  
  constructor(private starWarsService: StarWarsPeopleService) {
    this.people = [];
    this.page = 1;
    this.results = 0;
   }

  people: People[];
  page: number;
  results: number;

  ngOnInit(): void {
    this.starWarsService.getCustomers(this.page).subscribe(
      ( data: SearchPeople ) => { 
        this.people = data.results;
        this.results = data.count;
    });
  }

}
