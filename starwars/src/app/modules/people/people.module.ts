import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { PeopleRoutingModule } from './people-routing.module';


@NgModule({
  declarations: [
    StarWarsPeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class PeopleModule { }
