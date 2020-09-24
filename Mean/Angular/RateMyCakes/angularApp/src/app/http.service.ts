import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  showCakeService(cakeId: any) {
    return this._http.get(`/cake/${cakeId}`);
  }

  constructor(private _http: HttpClient) { }

    submittedCakeService(submittedCake){
      console.log("This is the submitted cake service function", submittedCake)
      return this._http.post('/cakes', submittedCake)
    }

    allCakesService(){
    console.log("This is the all cake service function")
    return this._http.get<[]>('/cakes') // the <[]> is to tell the service it will be using an array when usually it is an object
    }

    submittedRatingService(submittedRating, cakeId){
      console.log("This is the submitted rating service", submittedRating, cakeId)
      return this._http.post(`/rateCake/${cakeId}`, submittedRating)
    }
}
