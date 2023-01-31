import { Component} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  hideNavbar = false;
  title = 'clanly';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/signup' || event.url === '/page-not-found') {
          this.hideNavbar = true;
        }
        else if (this.hideNavbar) {
          this.hideNavbar = false;
        }
      }
    });
  }
}



