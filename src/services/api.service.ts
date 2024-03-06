import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrlPlanet ="https://swapi.dev/api/planets/"
  baseUrlFilm ="https://swapi.dev/api/films/"
  baseUrlRecident ="https://swapi.dev/api/people/"
  planetUrl ="https://swapi.dev/api/planets/?page="
  getPlanet(id:number) {
    return this.http.get(this.planetUrl+id);
  }

  getPlanetById(id: number) {
    return this.http.get(this.baseUrlPlanet + id + "/");
  }
  getFilmById(id: number) {
    return this.http.get(this.baseUrlFilm + id + "/");
  }
  getRecidentById(id: number) {
    return this.http.get(this.baseUrlRecident + id + "/");
  }


  getDataFromUrl(url: string) :Observable<any>{
    return this.http.get(url)
  }

  callApi(url:string){
    return this.http.get(url)
  }
  getMultiApiData(films: any): Observable<any>[] {
    console.log(films);
    const observables: Observable<any>[] = [];
    films?.forEach((url: any) => {
      observables.push(this.callApi(url));
    });
    return observables;
  }

}
