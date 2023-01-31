import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-myclans',
  templateUrl: './myclans.component.html',
  styleUrls: ['./myclans.component.css']
})
export class MyclansComponent {

  clans: any = [];

  constructor(private api: ApiService) {
    this.api.getMyClans().subscribe((data: any) => {
      if (data.hasOwnProperty("error")) {
        alert(data.error);
      }
      else {
        this.clans = data["clans"];
      }
    });
  }
}
