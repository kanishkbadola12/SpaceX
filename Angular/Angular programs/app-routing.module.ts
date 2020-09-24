import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DisplayComponent } from "../app/display/display.component";
import { FormComponent } from "../app/form/form.component";
import { DetailsComponent } from './form/details/details.component';
import { DynamicTableComponent } from "../app/dynamic-table/dynamic-table.component";

const routes: Routes = [
  {path:'', component: DynamicTableComponent},
  {path:'form', component:FormComponent,
  children: [{
    path: 'details', component: DetailsComponent
  }]
},
  {path: 'display', component: DisplayComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
