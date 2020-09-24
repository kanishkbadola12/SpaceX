import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { DetailsComponent } from './form/details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { HttpClientModule } from "@angular/common/http";
import { customDirective } from "../app/custoom-directive";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    DetailsComponent,
    DynamicTableComponent,
    customDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
