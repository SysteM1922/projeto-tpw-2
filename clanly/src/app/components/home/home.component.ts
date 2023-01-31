import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  posts: any = [];

  constructor(private api: ApiService) {
    this.api.getMainFeed().subscribe((data: any) => {
      this.posts = data.posts;
    });
    if (sessionStorage.getItem('reloadFlag')) {
      sessionStorage.removeItem('reloadFlag');
      window.location.reload();
    }
  }
}

