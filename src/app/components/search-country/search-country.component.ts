import { Component, OnInit } from '@angular/core';

import { GetCountriesService } from '../../services/get-countries.service'


@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit {

  
  constructor(private getDataServ:GetCountriesService) { }
 

  
  result:any = [{}];
  show:boolean = true;//Show the LOADING Value
  arrayLeters:any;
  checkboxArray:any;

  ngOnInit() {
     this.getCountries();//
  }

  getCountries(){    
    this.getDataServ.getCountriesJSON().subscribe(
      data => {
        this.result = data;
        this.show = false;
        this.getFirstLetterOfCountries();
      },
      err => {
        console.log('Error in Service -->>',err)
      }
    );   
  }
  
  getFirstLetterOfCountries(){
    this.arrayLeters = this.result.map(item =>item.name[0])
    this.arrayLeters = [...new Set(this.arrayLeters)].sort( (a,b)=>{ if(a<b) return -1; if(a>b) return 1; return 0;})
  }  

  clearCheckBox(){
    this.checkboxArray = document.querySelectorAll('.checkboxCountry') 
    this.checkboxArray.forEach(element => {
      element.checked = false;
    });
  }

}
