import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { HttpService } from '../http.service';


@Component({
  selector: 'app-rate-cake-form',
  templateUrl: './rate-cake-form.component.html',
  styleUrls: ['./rate-cake-form.component.css']
})
export class RateCakeFormComponent implements OnInit {
  submittedRating = {}

  @Input() specificCakeId: string //This is where the id is being passed

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  submittedRatingForm(){
    console.log("This is the submitted rating form in the component", this.submittedRating, this.specificCakeId)
    let submittedRatingObservable = this._httpService.submittedRatingService(this.submittedRating, this.specificCakeId)
    submittedRatingObservable.subscribe(submittedRatingData => {
      console.log(submittedRatingData)
      this.submittedRating = submittedRatingData
    })
  }

}
