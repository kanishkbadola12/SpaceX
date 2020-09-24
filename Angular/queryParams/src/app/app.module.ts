import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cmp2', component: Cmp2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Cmp2Component,
    Cmp1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
