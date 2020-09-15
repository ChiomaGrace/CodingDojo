import { HttpClient } from '@angular/common/http'; //automated from the code in line 9
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { } //after adding this line it did the auto import(injection) above. made private so all the components uses the same http service. now has the ability to write functions/code within this class
    allTasksData(){ //created/declared a function that is a function of the HttpService class. to use or call it...insert it into a component
      console.log("This is the retrieve data function.")
      let allTasksRoute = this._http.get('/tasks') //_http is its reference/name in the http service. this should return an observable. an observable is similar to a promise. Difference being an observable has many status and needs a subscribe whereas a promise has 3 statuses/stages(1. initialized (.then), 2.rejected(.catch), 3. completed/accepted) and needs a .then/.catch
      allTasksRoute.subscribe(taskData =>{
        console.log("This console log shows all the task data", taskData)
      }) 
      // let showRoute = this._http.get('/tasks/:id') //_http is its reference/name in the http service. this should return an observable. an observable is similar to a promise. Difference being an observable has many status and needs a subscribe whereas a promise has 3 statuses/stages(1. initialized (.then), 2.rejected(.catch), 3. completed/accepted) and needs a .then/.catch
      // showRoute.subscribe(taskData =>{
      //   console.log("This console log shows the data of a specific task by its id", taskData)
      // }) 
    } 

    specificTaskData(id){ //created/declared a function that is a function of the HttpService class. to use or call it...insert it into a component
      console.log("This is the specific task data function.")
      let showRoute = this._http.get(`/tasks/${id}`) //_http is its reference/name in the http service. this should return an observable. an observable is similar to a promise. Difference being an observable has many status and needs a subscribe whereas a promise has 3 statuses/stages(1. initialized (.then), 2.rejected(.catch), 3. completed/accepted) and needs a .then/.catch
      showRoute.subscribe(taskData =>{
        console.log("This console log shows the data of a specific task by its id", taskData)
      }) 
    } 
}
