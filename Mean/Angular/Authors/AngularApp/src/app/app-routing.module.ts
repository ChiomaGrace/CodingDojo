import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';

import { AuthorFormComponent } from './author-form/author-form.component';

import { EditAuthorComponent } from './edit-author/edit-author.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: AllAuthorsComponent},
  { path: 'new',component: AuthorFormComponent },
  { path: 'edit/:id', component: EditAuthorComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AllAuthorsComponent,
  AuthorFormComponent,
  EditAuthorComponent,
  PageNotFoundComponent
]
