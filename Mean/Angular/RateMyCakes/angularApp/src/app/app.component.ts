import { Component } from '@angular/core';
import { HttpService } from './http.service';
// import {AllCakesComponent} from './all-cakes/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cakes';
  submittedCake = {}
  allCakes = [] //made this an array instead of an object, so the one to many relationship with the ratings can be included/pushed
  specificCakeImage = {} // to hold the data received from the child component
  

  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    this.allCakesData() //so the function runs as soon as the page is uploaded
  }

  submittedCakeForm(){
    console.log("This is the submitted cake form in the component", this.submittedCake)
    let submittedCakeObservable = this._httpService.submittedCakeService(this.submittedCake)
    submittedCakeObservable.subscribe(submittedCakeData => {
      this.submittedCake = submittedCakeData
    })
    this.allCakesData()
  }

  allCakesData(){
    console.log("This is the all cake function in the component", this.allCakes)
    let allCakesObservable = this._httpService.allCakesService()
    allCakesObservable.subscribe(allCakesData => {
      this.allCakes = allCakesData
    })
  }

  onButtonShowSpecificCake(cakeId){
    console.log("This is receiving data from the all cakes child component to then pass to the show cake component", cakeId)
    let showSpecificCakeObservable = this._httpService.showCakeService(cakeId)
    showSpecificCakeObservable.subscribe(showCakeData => {
      this.specificCakeImage = showCakeData
    })

  }



}


