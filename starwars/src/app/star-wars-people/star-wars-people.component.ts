import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleService } from './star-wars-people.service';
import { People } from '../interface/people';
import { SearchPeople } from '../interface/search-people';
import { TooltipPosition } from '@angular/material/tooltip';

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
    this.next = 0;
    this.previous = 0;
    this.position = 'above';
   }

  people: People[];
  page: number;
  results: number;
  next: number;
  previous: number;
  position: TooltipPosition;

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.starWarsService.getCustomers(this.page).subscribe(
      ( data: SearchPeople ) => { 
        this.people = data.results;
        this.results = data.count;
        this.previous = data.previous != null ? Number(data.previous.substr(data.previous.length - 1)) : 0;
        this.next = data.next != null ? Number(data.next.substr(data.next.length - 1)) : 0;
    });
  }

  decreasePage(): void {
    this.page--;
    this.getPeople();
  }

  increasePage(): void {
    this.page++;
    this.getPeople();
  } 

}
