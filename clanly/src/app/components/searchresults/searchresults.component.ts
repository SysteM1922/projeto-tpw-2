import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent {
  search: string | any = '';
  posts: any = [];
  clans: any = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.search = this.route.snapshot.paramMap.get('search');
    this.doSearch("search=" + this.search);
  }

  doSearch(search: any) {
    this.api.search(search).subscribe((data: any) => {
      if (data.hasOwnProperty('error')) {
        alert(data.error);
      }
      else {
        this.posts = data.posts;
        if (this.clans.length == 0) {
          this.clans = data.clans;
        }
      }
    });
  }
}
