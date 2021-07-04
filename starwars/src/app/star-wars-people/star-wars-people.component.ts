import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleService } from './star-wars-people.service';
import { People } from '../interface/people';
import { SearchPeople } from '../interface/search-people';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'app-star-wars-people',
  templateUrl: './star-wars-people.component.html',
  styleUrls: ['./star-wars-people.component.scss']
})
export class StarWarsPeopleComponent implements OnInit {
  
  constructor(private starWarsService: StarWarsPeopleService,
              private formBuilder: FormBuilder,
              public spinnerService: SpinnerService) {
    this.people = [];
    this.page = 1;
    this.results = 0;
    this.next = 0;
    this.previous = 0;
    this.position = 'above';
    this.input = '';
    this.form = this.formBuilder.group({
      search: ''
  });
  
  }

  people: People[];
  page: number;
  results: number;
  next: number;
  previous: number;
  position: TooltipPosition;
  form: FormGroup;
  input: string;

  ngOnInit(): void {
    this.getPeople();
    this.form.controls['search'].valueChanges.subscribe(value => {
      this.input = value;
    });
  }

  getPeople(): void {
    this.starWarsService.getPeople(this.page).subscribe(
      ( data: SearchPeople ) => { 
        this.setResult(data);
    });
  }

  searchPeople(name: string): void {
    this.starWarsService.search(name).subscribe(
      ( data: SearchPeople ) => { 
        this.setResult(data);
    });
  }

  setResult(data: SearchPeople) {
    this.people = data.results;
    this.results = data.count;
    this.previous = data.previous != null ? Number(data.previous.substr(data.previous.length - 1)) : 0;
    this.next = data.next != null ? Number(data.next.substr(data.next.length - 1)) : 0;
  }

  decreasePage(): void {
    this.page--;
    this.getPeople();
  }

  increasePage(): void {
    this.page++;
    this.getPeople();
  } 

  showDetails(): void {
  }

  search(): void {
    this.people = [];
    if ( this.form.controls['search'].value.length > 0 ) {
      this.searchPeople(this.form.controls['search'].value);
    } else {
      this.getPeople();
    }
  }

}
