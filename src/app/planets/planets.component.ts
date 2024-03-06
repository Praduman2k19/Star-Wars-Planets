import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

  planetData:any
  planetId=1
  filmList:any=[]
  residenceList:any=[]

  constructor(private services: ApiService, private route: ActivatedRoute,private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.planetId = params['id'];
        this.getPlanetData(this.planetId)
      });
    }

  getPlanetData(id: number){
    this.services.getPlanetById(id).subscribe(res => {
      console.log(res);
      this.planetData = res
      this.getMultidataResidents(this.planetData?.residents);
      this.getMultidataFilm(this.planetData?.films);

    })
  }

async getMultidataFilm(data:any){
  const observables = await this.services.getMultiApiData(data);
  forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.filmList= responses
    },
    error => {
      console.error('Error occurred:', error);
    }
  );
}
  async getMultidataResidents(data: any) {
    const observables = await this.services.getMultiApiData(data);
    forkJoin(observables).subscribe(responses => {
      console.log('All API responses:', responses);
      this.residenceList = responses
    },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }


  viewFilmDetails(url: string){
    console.log(url);
    let arr = url.split('/');
    let id=arr[arr.length - 2];

    this.router.navigate(
      ['/film'],
      { queryParams: { id: id } }
    );

  }

  viewRDetails(url: string) {
    console.log(url);
    let arr = url.split('/');
    let id=arr[arr.length - 2];

    this.router.navigate(
      ['/resident'],
      { queryParams: { id: id } }
    );

  }
}
