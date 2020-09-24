import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';


@Component({
  selector: 'app-show-cake',
  templateUrl: './show-cake.component.html',
  styleUrls: ['./show-cake.component.css']
})
export class ShowCakeComponent implements OnInit {
  @Input() showSpecificCake: {bakerName: string, cakeImage: string} //how come i didn't need to do the cakeImage: string?

  constructor() { }

  ngOnInit() {
  }

  showRatings(){
    console.log(this.showSpecificCake)
  }
}
