import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsPeopleComponent } from './components/star-wars-people/star-wars-people.component';

const routes: Routes = [
    { path: '', component: StarWarsPeopleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
