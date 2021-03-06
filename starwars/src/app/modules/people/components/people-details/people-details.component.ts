import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { People } from '../../models/people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {people: People}) {
    this.people = data.people;
  }

  people: People;

  ngOnInit(): void {
  }

}
