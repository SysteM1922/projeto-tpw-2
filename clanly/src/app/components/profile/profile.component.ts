import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges {
  @Input() entity?: string;
  @Input() nFollowers?: number = 0;
  @Input() nFollowing?: number = 0;
  @Input() nPosts?: number = 0;
  @Input() nComments?: number = 0;
  @Input() imageUrl?: string;
  @Input() name?: string;
  @Input() desc?: string;
  @Input() labels?: string[]; // ['Clan 1', 'Clan 2', 'Clan 3', 'Clan 4', 'Clan 5']
  @Input() data?: number[] | any; // [12, 19, 3, 5, 2, 3]
  @Input() follow?: boolean = false;
  @Input() clanId?: string;

  constructor(private api: ApiService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.entity = changes['entity'].currentValue;
    this.nFollowers = changes['nFollowers'].currentValue;
    this.nFollowing = changes['nFollowing'].currentValue;
    this.nPosts = changes['nPosts'].currentValue;
    this.nComments = changes['nComments'].currentValue;
    this.imageUrl = changes['imageUrl'].currentValue;
    this.name = changes['name'].currentValue;
    this.desc = changes['desc'].currentValue;
    this.labels = changes['labels'].currentValue;
    this.data = changes['data'].currentValue;
    this.follow = changes['follow'].currentValue;
    this.clanId = changes['clanId'].currentValue;
  }

  followClan() {
    this.api.followClan({id: this.clanId }).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        window.location.reload();
      }
    });
  }

  unfollowClan() {
    this.api.unfollowClan({id: this.clanId }).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        window.location.reload();
      }
    });
  }
}
