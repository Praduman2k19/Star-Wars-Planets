import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { ViewResidentComponent } from './view-resident/view-resident.component';
import { ViewFilmComponent } from './view-film/view-film.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'planet', component: PlanetsComponent },
  { path: 'film', component: ViewFilmComponent },
  { path: 'resident', component: ViewResidentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
