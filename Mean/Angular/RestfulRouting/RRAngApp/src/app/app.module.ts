import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpService} from './http.service'; //added this manually because only components get added automatically
import {HttpClientModule} from '@angular/common/http' //added this manually because it provides functionality to put, patch, etc requests



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //added this here for access to it but also need to do a dependency injection in the http service for full functionality
  ],
  providers: [HttpService], //added this in order to have relationship with components
  bootstrap: [AppComponent]
})
export class AppModule { }
