import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostComponent } from '../post/post.component';
@NgModule({
  declarations: [
    NavbarComponent,
    PostComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
