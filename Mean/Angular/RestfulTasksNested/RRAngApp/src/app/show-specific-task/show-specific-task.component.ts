import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // so the parent and child components can communicate



@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowSpecificTaskComponent implements OnInit {
  @Input() specificTask: {title: string, description: string}

  constructor() { }

  ngOnInit() {
  }

}
