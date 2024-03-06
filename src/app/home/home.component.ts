import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  planetData: any=[]
  dynamicArrayP:any=[]
  currentPage:number=1

  constructor(private services: ApiService,private router: Router) {
    this.getPlanetData(this.currentPage)
  }



  getPlanetData(id:number) {
    this.services.getPlanet(id).subscribe(res => {
      console.log(res);
      this.planetData = res;
      this.dynamicArrayP=[]
      for(let i=0;i<this.planetData?.count/10;i++)
        this.dynamicArrayP.push(i);
    })
  }

  updatePage(id:number){
    this.currentPage=id
    this.getPlanetData(id);
  }
  prevNext(id:number){

    this.currentPage += id;
    if(this.currentPage<1){
      this.currentPage = 1;
      return;
    }
    if (this.currentPage >= this.dynamicArrayP.length){
      this.currentPage = this.dynamicArrayP.length;
      return;
    }
    this.getPlanetData(this.currentPage);

  }

  viewFilms(data: any) {
    console.log(data);

  }
  viewDetails(url:any) {
    console.log(url);
    let arr = url.split('/');
    let id=arr[arr.length - 2];

    this.router.navigate(
      ['/planet'],
      { queryParams: { id: id } }
    );
  }





}
