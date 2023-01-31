import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ApiService } from 'src/app/services/api-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnChanges {
  @Input() title?: string;
  @Input() content?: string;
  @Input() image?: string = 'https://placeimg.com/2000/1000/nature';
  @Input() post: any;
  id: string | any = '';
  comments: any = [];
  clan: any;
  user: any;
  clanImg: string = 'https://placeimg.com/400/400/people';
  userImg: string = 'https://placeimg.com/400/400/people';
  isOwner: boolean = false;

  addCommentForm: FormGroup = new FormGroup({});

  constructor(private img: ImageService, private api: ApiService) {
    this.addCommentForm = new FormGroup({
      comment: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.post = changes['post'].currentValue;
    this.title = this.post.title;
    this.content = this.post.description;
    this.id = this.post.id;
    this.image = this.img.getImage(this.post.post_img);
    this.api.getBasicPost(this.id).subscribe((data: any) => {
      this.comments = data.comments;
      this.clan = data.clan;
      this.user = data.author;
      this.clanImg = this.img.getImage(this.clan.clan_img);
      this.userImg = this.img.getImage(this.user.profile_img);
      if (this.user.id == sessionStorage.getItem('user_id')) {
        this.isOwner = true;
      }
    });
  }

  createComment() {
    this.api.createComment({ post: this.id, comment: this.addCommentForm.value.comment }).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      } else {
        this.comments.push(data);
        this.addCommentForm.reset();
      }
    });
  }

  deleteComment(id: string) {
    this.api.deleteComment(id).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      } else {
        this.comments = this.comments.filter((comment: any) => comment.id != id);
      }
    });
  }

  deletePost() {
    this.api.deletePost(this.id).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      } else {
        window.location.reload();
      }
    });
  }
}
