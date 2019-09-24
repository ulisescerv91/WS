import { Component, OnInit } from '@angular/core';

import { GetCountriesService } from '../../services/get-countries.service'


@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit {

  
  constructor(private getDataServ:GetCountriesService) { }
  userName:string = 'Data que muestra la primera vez que carga la imagen';
 

  
  result:any = [{}];
  ngOnInit() {
    console.log('test')
    this.getDataServ.getCountriesJSON().subscribe(
      data => {
        this.result = data;
      },
      err => {
        console.log('Error in Service -->>',err)
      }
    );    
  }

  myTest(){
    //  this.result = this.getDataServ.getCountriesJSON()
    //  .subscribe(
    //   data => {
    //     this.result = data;
    //   },
    //   err => {
    //     console.log('Error in Service -->>',err)
    //   }
    // );    
  }

}
