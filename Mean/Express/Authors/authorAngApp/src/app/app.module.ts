import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EditComponent } from './edit/edit.component';
import {AuthorFormService} from './form-component/author-form.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContentComponent,
    FormComponentComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
