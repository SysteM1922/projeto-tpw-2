import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup | any;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      search: new FormControl("")
    });
  }

  search() {
    this.router.navigate(['/searchresults', { search: this.searchForm.value['search'] }]);
    if (this.router.url.split(";")[0] == '/searchresults') {
      window.location.replace('/searchresults;search=' + this.searchForm.value['search']);
    }
  }
}
