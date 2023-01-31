import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  posts: any[] = [];

  imageUrl: string = 'https://placeimg.com/2000/1000/nature';
  nFollowing: number = 0;
  nPosts: number = 0;
  nComments: number = 0;
  profileImageUrl: string = 'https://placeimg.com/400/400/people';
  name: string = '';
  bio: string = '';
  labels: string[] = [];
  data: number[] = [];
  follow: boolean = false;
  
  constructor(private api: ApiService, private auth: AuthService, private image: ImageService) {
    this.api.getProfile().subscribe(data => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
        this.auth.logout();
      }
      else {
        this.name = data.name;
        this.bio = data.bio;
        this.nFollowing = data.nFollowing;
        this.nPosts = data.nPosts;
        this.nComments = data.nComments;
        this.profileImageUrl = this.image.getImage(data.profileImageUrl);
        this.imageUrl = this.image.getImage(data.coverImageUrl);
        this.labels = data.labels;
        this.data = data.data;
        this.posts = data.posts;
        this.follow = data.follow;
      }
    });
  }
}
