import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profileseparator',
  templateUrl: './profileseparator.component.html',
  styleUrls: ['./profileseparator.component.css']
})
export class ProfileseparatorComponent {
  @Input() title?: string;
}
