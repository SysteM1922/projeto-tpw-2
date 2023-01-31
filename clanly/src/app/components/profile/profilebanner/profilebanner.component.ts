import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profilebanner',
  templateUrl: './profilebanner.component.html',
  styleUrls: ['./profilebanner.component.css']
})
export class ProfilebannerComponent{
  @Input() imageUrl: string = 'https://placeimg.com/2000/1000/nature';
}
