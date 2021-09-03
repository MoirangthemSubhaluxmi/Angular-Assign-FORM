import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', redirectTo:'get-data', pathMatch: 'full' },
  { path: 'get-data', component: Form1Component },
  { path: 'show-data', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
