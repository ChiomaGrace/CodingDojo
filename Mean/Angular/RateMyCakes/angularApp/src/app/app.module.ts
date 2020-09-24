import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' //added this
import {HttpService} from './http.service' //added this
import {HttpClientModule} from '@angular/common/http' //added this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { RateCakeFormComponent } from './rate-cake-form/rate-cake-form.component';
import { ShowCakeComponent } from './show-cake/show-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCakesComponent,
    RateCakeFormComponent,
    ShowCakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //added this
    HttpClientModule, //added this
    AppRoutingModule
  ],
  providers: [HttpService], //added this
  bootstrap: [AppComponent]
})
export class AppModule { }
