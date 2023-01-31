import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-searchtable',
  templateUrl: './searchtable.component.html',
  styleUrls: ['./searchtable.component.css']
})
export class SearchtableComponent implements OnChanges {
  @Input() posts: any = [];

  constructor(private img: ImageService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.posts = changes["posts"].currentValue;
  }

  getImg(path: any) {
    return this.img.getImage(path);
  }

}
