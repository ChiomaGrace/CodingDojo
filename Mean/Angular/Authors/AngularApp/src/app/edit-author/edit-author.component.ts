import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  updateAuthor = {}
  errors = {}


  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this._httpService.getAuthor(params.id).subscribe(data => {
        this.updateAuthor = data
      })
    })
  }

  updateAuthorForm(){
    console.log("This is the update function.", this.updateAuthor)
    let updateAuthorObservable = this._httpService.updateAuthorService(this.updateAuthor) //need 'this' syntax to pass through params
    updateAuthorObservable.subscribe(updateAuthorData => { //creating and subscribing to an observable to get the angular edit data into the backend database
      console.log(updateAuthorData)
      if(updateAuthorData.errors){
        this.errors = updateAuthorData.errors
      }
      else{
        this._router.navigate(['/'])
      }
    })
  }
  // updateAuthorForm(){
  //   console.log("This is the update function.", this.updateAuthor)
  //   let updateAuthorObservable = this._httpService.updateAuthorService(this.updateAuthor) //need 'this' syntax to pass through params
  //   updateAuthorObservable.subscribe(updateAuthorData => { //creating and subscribing to an observable to get the angular edit data into the backend database
  //     console.log(updateAuthorData)
  //     if(updateAuthorData["errors"]){ //to try to get ride of the angular error
  //       this.errors = updateAuthorData.errors
  //     }
  //     else{
  //       this._router.navigate(['/'])
  //     }
  //   })
}
