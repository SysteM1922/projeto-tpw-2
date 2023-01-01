import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchtableComponent } from './searchresults/searchtable/searchtable.component';
import { SearchfiltersComponent } from './searchresults/searchfilters/searchfilters.component';
import { MyclansComponent } from './myclans/myclans.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent,
    UserComponent,
    SearchresultsComponent,
    PageNotFoundComponent,
    SearchtableComponent,
    SearchfiltersComponent,
    MyclansComponent,
    SignupComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
