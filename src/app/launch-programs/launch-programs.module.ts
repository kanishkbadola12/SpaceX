import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [FiltersComponent, HeaderComponent, FooterComponent, ProgramsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FiltersComponent,
    HeaderComponent,
    FooterComponent,
    ProgramsComponent
  ]
})
export class LaunchProgramsModule { }
