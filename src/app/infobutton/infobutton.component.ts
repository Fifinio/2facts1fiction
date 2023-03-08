import { Component, Input } from '@angular/core';
import { Information } from '../services/information';

@Component({
  selector: 'app-infobutton',
  templateUrl: './infobutton.component.html',
  styleUrls: ['./infobutton.component.scss'],
})
export class InfobuttonComponent {
  @Input() information: Information = {
    id: 0,
    text: '',
    isFact: false,
    source: '',
  };
}
