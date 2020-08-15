import { Component, OnInit } from '@angular/core';
import {AuthorFormService} from './author-form.service'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  newAuthor: {name:String,}

  constructor(private _authorFormService: AuthorFormService) {

  }

  ngOnInit(){
    this.newAuthor = {
      name: "",
    }
    console.log(this._authorFormService)
  }

  submitAuthor(){
    console.log('The author submitted was', this.newAuthor)
  }
}
