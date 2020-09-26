import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import {FormsModule} from '@angular/forms';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthorFormComponent,
    AllAuthorsComponent,
    EditAuthorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
