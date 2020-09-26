import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors = []
  specificAuthor = {}

  constructor(private _httpService: HttpService, private _homeRoute: Router) { }

  ngOnInit() {
    this.allAuthorsData() //so the function runs as soon as the page is uploaded

  }

  allAuthorsData(){
    console.log("This is the all author function in the component", this.allAuthors)
    let allAuthorsObservable = this._httpService.allAuthorsService()
    allAuthorsObservable.subscribe(allAuthorsData => {
      this.allAuthors = allAuthorsData
    })
  }

  deleteAuthor(authorId: Number): void{
    console.log("This is the delete function.")
    let deleteAuthorObservable = this._httpService.deleteAuthorService(authorId) //need 'this' syntax to pass through params
    deleteAuthorObservable.subscribe(deleteAuthorData => { //creating and subscribing to an observable to get the angular edit data into the backend database
      this.specificAuthor = deleteAuthorData
      console.log("Deleting the following data:", deleteAuthorData)
      this.allAuthorsData()
      this._homeRoute.navigate(['/']); 
    })
  }

}
