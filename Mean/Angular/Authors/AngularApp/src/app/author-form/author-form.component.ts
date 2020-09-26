import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  submittedAuthor = {}
  errors = {}

  constructor(private _httpService: HttpService, private _homeRoute: Router) { }
  

  ngOnInit() {
  }

  submittedAuthorForm(){
    console.log("This is the author form component")
    let submittedAuthorObservable = this._httpService.submittedAuthorService(this.submittedAuthor)
    submittedAuthorObservable.subscribe(authorData => {
      this.submittedAuthor = authorData
      if(authorData["errors"]){
        this.errors = authorData["errors"]
      }
      else{
        this._homeRoute.navigate(['/']); 
      }
    })
  }
    // console.log("submitted data", this.submittedAuthor)

}
