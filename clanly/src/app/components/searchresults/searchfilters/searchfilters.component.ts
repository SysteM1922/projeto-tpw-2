import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { SearchresultsComponent } from '../searchresults.component';

@Component({
  selector: 'app-searchfilters',
  templateUrl: './searchfilters.component.html',
  styleUrls: ['./searchfilters.component.css']
})
export class SearchfiltersComponent implements OnChanges {
  @Input() clans: any = [];

  filterForm: FormGroup | any;

  constructor(private api: ApiService, private route: ActivatedRoute, private search: SearchresultsComponent) {
    this.filterForm = new FormGroup({
      user: new FormControl(),
      clan: new FormControl(),
      date: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clans = changes['clans'].currentValue;
  }

  filter() {
    console.log(this.filterForm.value);
    let search = "";
    if (this.route.snapshot.paramMap.get('search')) {
      search += "search=" + this.route.snapshot.paramMap.get('search');
    }
    if (this.filterForm.value.user) {
      search += "&user=" + this.filterForm.value.user;
    }
    if (this.filterForm.value.clan) {
      search += "&clan=" + this.filterForm.value.clan;
    }
    if (this.filterForm.value.date) {
      search += "&date=" + this.filterForm.value.date;
    }
    this.search.doSearch(search);
  }

}
