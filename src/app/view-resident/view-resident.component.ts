import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-view-resident',
  templateUrl: './view-resident.component.html',
  styleUrls: ['./view-resident.component.scss']
})
export class ViewResidentComponent {

  recidentData: any;
  homeworld:any
  residenceId: any;

  speciesList: any=[]
  filmList: any=[]
  vehiclesList: any=[]
  starshipsList: any=[]

  constructor(private services: ApiService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.residenceId = params['id'];
      console.log(this.residenceId);

      this.getrecidentData(this.residenceId)
    });
  }

  getrecidentData(id: any) {
    this.services.getRecidentById(id).subscribe(data => {
      this.recidentData = data;
      console.log(data);
      this.getHomeWorld(this.recidentData?.homeworld)

      this.getMultidataSpecies(this.recidentData?.species)
      this.getMultidataFilm(this.recidentData?.films)
      this.getMultidataStarships(this.recidentData?.starships)
      this.getMultidataVehicles(this.recidentData?.vehicles)

    })
  }

  getHomeWorld(url: string){
    this.services.getDataFromUrl(url).subscribe(data =>{
      this.homeworld=data;
      console.log(data);

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
  getMultidataFilm(data: any) {
    const observables = this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.filmList = responses
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



  viewPlanet(url: any) {
    console.log(url);
    let arr = url.split('/');
    let id = arr[arr.length - 2];

    this.router.navigate(
      ['/planet'],
      { queryParams: { id: id } }
    );
  }

  viewRecidenceDetails(url: string) {
    console.log(url);

  }

}


