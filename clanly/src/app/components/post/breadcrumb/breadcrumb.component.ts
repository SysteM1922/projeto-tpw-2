import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnChanges {
  @Input() clan: string = 'Clanly';
  @Input() user: string = 'User';
  @Input() clanImg: string = 'https://placeimg.com/400/400/people';
  @Input() userImg: string = 'https://placeimg.com/400/400/people';
  @Input() id: string = '0';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.clan = changes['clan'].currentValue;
    this.user = changes['user'].currentValue;
    this.clanImg = changes['clanImg'].currentValue;
    this.userImg = changes['userImg'].currentValue;
    this.id = changes['id'].currentValue;
  }

}
