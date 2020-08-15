import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorFormService {

  authors = [
    {name: 'submited author from the form'}
  ];

  constructor() { }
}
