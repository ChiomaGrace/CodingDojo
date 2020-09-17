import { Component } from '@angular/core';
import { HttpService } from './http.service'; //automated after adding the private httpservice on line 13

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API' //setting/creating new attribute(s)
  subTitle = "All the Tasks:"
  footer = "The Third Task"
  tasks = [] 

  constructor(private _httpService: HttpService) { } // added this constructor line of code. this is created automatically when generating a new component, but not here. then also added the httpservice so this app component has access to it. to give it actual functionality need to call it in ngoninit
  
  ngOnInit(){ // added this code. this is created automatically when generating a new component, but not here
    // console.log("This console log is from the app component.")
    this.getTasksFromService() //attempting to invoke a function containing the data from the app component instead of the service
  }

  getTasksFromService(){ //the function that gets the data from the service
    // console.log("This is the GetTasksFromService function from the app component.")
    let allTasksRoute = this._httpService.allTasksData() //_httpService is its reference/name in this app component file so what needs to be used. this should return an observable. an observable is similar to a promise. Difference being an observable has many status and needs a subscribe whereas a promise has 3 statuses/stages(1. initialized (.then), 2.rejected(.catch), 3. completed/accepted) and needs a .then/.catch
    allTasksRoute.subscribe(taskData =>{
      console.log("This console log shows all the task data calling on the service from the app component", taskData)
      this.tasks = taskData
      console.log(this.tasks)
    })

  
  }

}