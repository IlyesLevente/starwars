import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { People } from '../../models/people';
import { SearchPeople } from '../../models/search-people';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeopleSpinnerService } from '../../services/people-spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDetailsComponent } from '../people-details/people-details.component';

@Component({
  selector: 'app-star-wars-people',
  templateUrl: './star-wars-people.component.html',
  styleUrls: ['./star-wars-people.component.scss']
})
export class StarWarsPeopleComponent implements OnInit {
  
  constructor(private peopleService: PeopleService,
              private formBuilder: FormBuilder,
              public peopleSpinnerService: PeopleSpinnerService,
              public dialog: MatDialog) {
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
    this.peopleService.getPeople(this.page).subscribe(
      ( data: SearchPeople ) => { 
        this.setResult(data);
    });
  }

  searchPeople(name: string): void {
    this.peopleService.search(name).subscribe(
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

  showDetails(people: People): void {
    this.dialog.open(PeopleDetailsComponent, {
      height: '70%',
      width: '35%',
      data: { people: people }
    });
  }

  search(): void {
    this.people = [];
    if ( this.form.controls['search'].value.length > 0 ) {
      this.searchPeople(this.form.controls['search'].value);
    } else {
      this.page = 1;
      this.getPeople();
    }
  }

}
