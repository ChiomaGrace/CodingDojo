import { HttpClient } from '@angular/common/http'; //automated from the code in line 9
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { } //after adding this line it did the auto import(injection) above. made private so all the components uses the same http service. now has the ability to write functions/code within this class
    allTasksData(){ //created/declared a function that is a function of the HttpService class. to use or call it...insert it into a component
      return this._http.get('/tasks') // this links the service with the routes from the express side
    } 

}
