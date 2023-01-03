import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bigform',
  templateUrl: './bigform.component.html',
  styleUrls: ['./bigform.component.css']
})
export class BigformComponent {
  @Input() type?: string;

}
