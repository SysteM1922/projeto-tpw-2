import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyclansComponent } from './components/myclans/myclans.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateclanComponent } from './components/createclan/createclan.component';
import { PostpageComponent } from './components/postpage/postpage.component';
import { ClanComponent } from './components/clan/clan.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { EditclanComponent } from './components/editclan/editclan.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'postpage', component: PostpageComponent, canActivate: [AuthService] },
  { path: 'user', component: UserComponent, canActivate: [AuthService] },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthService] },
  { path: 'editclan/:id', component: EditclanComponent, canActivate: [AuthService] },
  { path: 'searchresults', component: SearchresultsComponent, canActivate: [AuthService] },
  { path: 'myclans', component: MyclansComponent, canActivate: [AuthService] },
  { path: 'clan/:id', component: ClanComponent, canActivate: [AuthService]},
  { path: 'createclan', component: CreateclanComponent, canActivate: [AuthService] },
  { path: 'page-not-found', component: PageNotFoundComponent, canActivate: [AuthService] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthService] },
  { path: '', component: HomeComponent, canActivate: [AuthService]},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
