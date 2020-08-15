import { NgModule } from '@angular/core';
import { MainContentComponent } from './main-content/main-content.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EditComponent } from './edit/edit.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'new',component: FormComponentComponent },
  { path: 'edit',component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
