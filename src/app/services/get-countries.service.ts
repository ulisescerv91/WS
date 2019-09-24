import { Injectable } from '@angular/core';

//Para ahcer las llamadas al servidor
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(private http:HttpClient) { }

  myOjb = [
    {'name':"mx"},
    {'name':"rs"},
    {'name':"ar"}

  ]
  getCountriesJSON(){
    //return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get('https://restcountries.eu/rest/v2/all')
    //return this.myOjb
  }

}
