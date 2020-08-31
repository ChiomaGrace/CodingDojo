import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormService {

  authors = [
    {name: 'submitted author from the form'}
  ];

  constructor() { }

}
