import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchtableComponent } from './searchtable/searchtable.component';
import { SearchfiltersComponent } from './searchfilters/searchfilters.component';



@NgModule({
  declarations: [
    SearchtableComponent,
    SearchfiltersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchresultsModule { }
