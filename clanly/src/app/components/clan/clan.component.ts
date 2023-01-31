import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {

  posts: any[] = [];
  nFollowers: number = 0;
  nPosts: number = 0;
  imageUrl: string = 'https://placeimg.com/2000/1000/nature';
  profileImageUrl: string = 'https://placeimg.com/400/400/people';
  name: string = '';
  desc: string = '';
  id: string | any = '';
  follow: boolean = false;

  constructor(private router: ActivatedRoute, private api: ApiService, private image: ImageService) {
    this.id = this.router.snapshot.paramMap.get('id');
    this.api.getClan(this.id).subscribe(data => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        this.name = data.name;
        this.desc = data.desc;
        this.nFollowers = data.nFollowers;
        this.nPosts = data.nPosts;
        this.imageUrl = this.image.getImage(data.background);
        this.profileImageUrl = this.image.getImage(data.img);
        this.posts = data.posts;
        this.follow = data.follow;
      }
    });
  }

}
