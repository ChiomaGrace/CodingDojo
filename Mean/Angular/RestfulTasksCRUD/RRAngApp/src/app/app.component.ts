import { Component } from '@angular/core';
import { HttpService } from './http.service'; //automated after adding the private httpservice on line 13

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restful Tasks API' //setting/creating new attribute(s)
  tasks: any
  specificTask: Object
  submittedTask = {} //the object that will bind in the form
  updateTask = {}

  constructor(private _httpService: HttpService) { } // added this constructor line of code. this is created automatically when generating a new component, but not here. then also added the httpservice so this app component has access to it. to give it actual functionality need to call it in ngoninit
  
  ngOnInit(){ // added this code. this is created automatically when generating a new component, but not here
    // console.log("This console log is from the app component.")
    this.submittedTask = {title: "", description: ""}
    this.allTaskData()
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
  
  submitTaskForm(){
    console.log("The submit form function.", this.submittedTask)
    let submittedTaskObservable = this._httpService.submittedTaskService(this.submittedTask) //need 'this' syntax to pass through params
    submittedTaskObservable.subscribe(submittedTaskData => { //creating and subscribing to an observable to get the angular submitted data into the backend database
      this.submittedTask = submittedTaskData
      console.log("Submitted task data via form:", submittedTaskData)
      this.allTaskData() //will call it again within the observable so it updates in real time the new task that was just submitted
    })
  }

  clickButtonToDisplayEditForm(taskId: Number): void{ //pass the id through the parameter to have access to it
      console.log(`This console log is the click event for the specific task using params ${taskId}.`)
      let specificTaskObservable = this._httpService.specificTaskService(taskId)
      specificTaskObservable.subscribe(specificTaskData => {
        this.specificTask = specificTaskData
        console.log("Specific task data:", specificTaskData)
      })
  }

  updateTaskForm(taskId: Number): void{
    console.log("This is the update function.", this.specificTask)
    let updateTaskObservable = this._httpService.updateTaskService(this.specificTask, taskId) //need 'this' syntax to pass through params
    updateTaskObservable.subscribe(updateTaskData => { //creating and subscribing to an observable to get the angular edit data into the backend database
      this.specificTask = updateTaskData
      console.log("Edited task data:", updateTaskData)
      this.allTaskData() //will call it yet again so it updates in real time the update fo the new task that was just submitted
    })
  }

  deleteButton(taskId: Number): void{
    console.log("This is the delete function.", this.specificTask)
    let deleteTaskObservable = this._httpService.deleteTaskService(this.specificTask, taskId) //need 'this' syntax to pass through params
    deleteTaskObservable.subscribe(deleteTaskData => { //creating and subscribing to an observable to get the angular edit data into the backend database
      this.specificTask = deleteTaskData
      console.log("Deleting the following data:", deleteTaskData)
      this.allTaskData() //will call it once more so it updates in real time the deletion of the task that was just submitted
    })
  }



}