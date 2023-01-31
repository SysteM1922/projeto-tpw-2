import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  followingClans: any[] = [];

  newPostForm: FormGroup | any;
  img: File | any;

  constructor(private auth: AuthService, private api: ApiService) {
    this.newPostForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      clan: new FormControl(),
    });
  }

  onImgChange(event: any) {
    this.img = event.target.files[0];
  }

  updateModal() {
    this.api.getFollowingClans().subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        this.followingClans = data.clans;
      }
    });
  }

  logout() {
    this.auth.logout();
  }

  newPost() {
    let header: {title: string, content: string, clan: string, image?: File | any} = {
      title: this.newPostForm.value.title,
      content: this.newPostForm.value.content,
      clan: this.newPostForm.value.clan,
    }
    if (this.img) {
      let reader = new FileReader();
      reader.readAsDataURL(this.img);
      reader.onload = () => {
        header.image = [reader.result as string, this.img.name];
        console.log(header);
        this.api_call(header);
      }
    }
    else {
      this.api_call(header);
    }
  }
  api_call(header: any) {
    this.api.newPost(header).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        alert(data.success);
        window.location.reload();
      }
    });
  }
}
