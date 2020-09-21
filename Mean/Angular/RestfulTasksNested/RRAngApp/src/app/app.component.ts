import { Component } from '@angular/core';
import { HttpService } from './http.service'; //automated after adding the private httpservice on line 13

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API' //setting/creating new attribute(s)
  toggleButton = "Get All the Tasks"
  subToggleButton = "Show"
  tasks: any
  specificTask: Object
  hideTaskList: Boolean = true //true meaning the task list IS hidden because the button has not been clicked on yet
  hideSpecificTaskList: Boolean = true

  constructor(private _httpService: HttpService) { } // added this constructor line of code. this is created automatically when generating a new component, but not here. then also added the httpservice so this app component has access to it. to give it actual functionality need to call it in ngoninit
  
  ngOnInit(){ // added this code. this is created automatically when generating a new component, but not here
    // console.log("This console log is from the app component.")
  }

  allTaskData(){ //the function that gets all the task data from the service
    // console.log("This is the GetTasksFromService function from the app component.")
    let allTasksObservable = this._httpService.allTasksService() //_httpService is its reference/name in this app component file so what needs to be used. this should return an observable. an observable is similar to a promise. Difference being an observable has many status and needs a subscribe whereas a promise has 3 statuses/stages(1. initialized (.then), 2.rejected(.catch), 3. completed/accepted) and needs a .then/.catch
    allTasksObservable.subscribe(taskData =>{
      this.tasks = taskData
      console.log("This console log shows all the task data calling on the service from the app component", taskData)
      // console.log(this.tasks)
    })
  }

  onButtonClickForAllTasks(){ //the function is initialized when the user interacts with the button
    this.hideTaskList = !this.hideTaskList //this sets it to false because this function has been called on meaning the list IS NOT hidden anymore. It is showing.
    this.toggleButton = "Hide All the Tasks"
    if(!this.hideTaskList){ //when the list is showing aka this attribute is false
      this.toggleButton = "Get All the Tasks"
      console.log("This console log is the click event to show all the tasks")
      this.allTaskData() //need 'this' before a variable or function name to call it
    }
  }

  onButtonClickToShowSpecificTask(taskId: Number): void{ //pass the id through the parameter to have access to it
    this.hideSpecificTaskList = !this.hideSpecificTaskList
    this.subToggleButton = "Show"
    if(!this.hideSpecificTaskList){
      this.subToggleButton = "Hide"
      console.log(`This console log is the click event for the specific task using params ${taskId}.`)
      let specificTaskObservable = this._httpService.specificTaskService(taskId)
      specificTaskObservable.subscribe(specificTaskData => {
        this.specificTask = specificTaskData
        console.log("Specific task data:", specificTaskData)
      })
    }
  }

}