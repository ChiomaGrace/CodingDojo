import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';


@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {
  @Input() showSpecificCake: any 

  constructor() { }

  ngOnInit() {
  }

  showRatings(){
    console.log(this.showSpecificCake)
  }
}
