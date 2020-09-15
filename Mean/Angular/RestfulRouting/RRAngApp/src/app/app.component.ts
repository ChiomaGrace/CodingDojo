import { Component } from '@angular/core';
import { HttpService } from './http.service'; //automated after adding the private httpservice on line 13

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks';

  
  constructor(private _httpService: HttpService) { } // added this constructor line of code. this is created automatically when generating a new component, but not here. then also added the httpservice so this app component has access to it. to give it actual functionality need to call it in ngoninit
  
  ngOnInit(){ // added this code. this is created automatically when generating a new component, but not here
    console.log("This console log is from the app component.")
    this._httpService.allTasksData() //use _httpservice as reference because it is a member of this app component. then can now call the function(s) created on the http service.ts file

    this._httpService.specificTaskData('5f602fd67172a465ef6054c3') //hard corded the id so the service knows what to reference
  }

}