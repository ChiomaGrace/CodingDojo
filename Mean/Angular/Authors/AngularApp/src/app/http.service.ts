import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getAuthor(id: any) {
    return this._http.get(`authors/${id}`)
  }

  constructor(private _http: HttpClient) { }

  submittedAuthorService(submittedAuthor) {
    console.log("This is the submitted author service", submittedAuthor)
    return this._http.post('/new', submittedAuthor)
  }

  allAuthorsService() {
    console.log("This is the all author service")
    return this._http.get<[]>('/authors')
  }

  updateAuthorService(updateAuthor){
    console.log("This is the update author service",updateAuthor)
    return this._http.put(`/authors/${updateAuthor._id}`, updateAuthor) 
  }

  deleteAuthorService(authorId){
    console.log(authorId)
    return this._http.delete(`/authors/${authorId}`) 
  }
}
