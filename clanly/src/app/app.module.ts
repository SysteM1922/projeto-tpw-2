import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchtableComponent } from './components/searchresults/searchtable/searchtable.component';
import { SearchfiltersComponent } from './components/searchresults/searchfilters/searchfilters.component';
import { MyclansComponent } from './components/myclans/myclans.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormComponent } from './components/form/form.component';
import { NgChartsModule } from 'ng2-charts';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { CreateclanComponent } from './components/createclan/createclan.component';
import { CreateformComponent } from './components/signup/createform/createform.component';
import { ClanformComponent } from './components/createclan/clanform/clanform.component';
import { ClanComponent } from './components/clan/clan.component';
import { PostpageComponent } from './components/postpage/postpage.component';
import { BreadcrumbComponent } from './components/post/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilebannerComponent } from './components/profile/profilebanner/profilebanner.component';
import { ProfilestatsComponent } from './components/profile/profilestats/profilestats.component';
import { ProfileseparatorComponent } from './components/profile/profileseparator/profileseparator.component';
import { BigformComponent } from './components/bigform/bigform.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { CommentComponent } from './components/post/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditclanComponent } from './components/editclan/editclan.component';
  
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
    MenuComponent,
    SearchComponent,
    CreateclanComponent,
    ClanComponent,
    CreateformComponent,
    ClanformComponent,
    PostpageComponent,
    BreadcrumbComponent,
    ProfileComponent,
    ProfilebannerComponent,
    ProfilestatsComponent,
    ProfileseparatorComponent,
    BigformComponent,
    EditprofileComponent,
    CommentComponent,
    EditclanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
