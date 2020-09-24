import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-all-cakes',
  templateUrl: './all-cakes.component.html',
  styleUrls: ['./all-cakes.component.css']
})
export class AllCakesComponent implements OnInit {
  @Input() displayAllCakes: {bakerName: string, cakeImage: string} //how come i didn't need to do the cakeImage: string?
  @Output() allCakesEventEmitter = new EventEmitter() //gives the ability send data back to the parent or have the parent do something

  constructor() { }

  ngOnInit() {
  }

  showSpecificCake(cakeId){ //this is the button that displays/holds the cake that needs to be passed to the parent
    this.allCakesEventEmitter.emit(cakeId)
    console.log("This is the child component passing data back to the parent")
  }
}
