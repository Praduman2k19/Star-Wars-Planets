import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './planets/planets.component';
import { HomeComponent } from './home/home.component';
import { ViewFilmComponent } from './view-film/view-film.component';
import { ViewResidentComponent } from './view-resident/view-resident.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    ViewFilmComponent,
    ViewResidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
