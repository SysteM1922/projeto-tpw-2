import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-service.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private api: ApiService, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.api.authenticate({ username, password });
  }

  signup(username: string, email: string, name: string, password: string): Observable<any> {
    return this.api.signup({ username, email, name, password });
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(route.routeConfig && (route.routeConfig.path === 'login' || route.routeConfig.path === 'signup' || route.routeConfig.path === 'page-not-found')) {
      if (sessionStorage.getItem('token')) {
        this.router.navigate(['/home']);
        return false;
      }
      sessionStorage.setItem('reloadFlag', 'true');
      return true;
    }
    if (sessionStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/login']);
    sessionStorage.setItem('reloadFlag', 'true');
    return false;
  }

  logout() {
    const token = sessionStorage.getItem('token');
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.api.logout({ token });
  }
}