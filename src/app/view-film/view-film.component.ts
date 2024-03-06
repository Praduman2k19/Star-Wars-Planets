import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.scss']
})
export class ViewFilmComponent {

  filmData:any;
  filmId:any;
  speciesList:any=[]
  charactersList: any=[]
  vehiclesList: any=[]
  starshipsList: any=[]
  planetsList: any=[]



  constructor(private services: ApiService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.filmId = params['id'];
      this.getFilmData(this.filmId)
    });
  }

  getFilmData(id:any){
    this.services.getFilmById(id).subscribe(data =>{
      this.filmData = data;
      console.log(data);
      this.getMultidataSpecies(this.filmData?.species)
      this.getMultidataCharacters(this.filmData?.characters)
      this.getMultidataPlanets(this.filmData?.planets)
      this.getMultidataStarships(this.filmData?.starships)
      this.getMultidataVehicles(this.filmData?.vehicles)
    })
  }

  getMultidataSpecies(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.speciesList = responses
    }, error => {
        console.error('Error occurred:', error);
    });
  }
  getMultidataCharacters(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.charactersList = responses
    }, error => {
      console.error('Error occurred:', error);
    });
  }
  getMultidataVehicles(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.vehiclesList = responses
    }, error => {
      console.error('Error occurred:', error);
    });
  }
  getMultidataStarships(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.starshipsList = responses
    }, error => {
      console.error('Error occurred:', error);
    });
  }
  getMultidataPlanets(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.planetsList = responses
    }, error => {
      console.error('Error occurred:', error);
    });
  }


  viewPlanet(url: any) {
    console.log(url);
    let arr = url.split('/');
    let id = arr[arr.length - 2];

    this.router.navigate(
      ['/planet'],
      { queryParams: { id: id } }
    );
  }

  viewRecidenceDetails(url: string){
    console.log(url);
    let arr = url.split('/');
    let id = arr[arr.length - 2];

    this.router.navigate(
      ['/resident'],
      { queryParams: { id: id } }
    );
  }

}


