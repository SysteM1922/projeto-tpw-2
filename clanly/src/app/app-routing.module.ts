import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyclansComponent } from './myclans/myclans.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'searchresults', component: SearchresultsComponent },
  { path: 'myclans', component: MyclansComponent },
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path : 'signup', component: SignupComponent},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
