import { Component, Input } from '@angular/core';
import { House } from '../models';

// TODO(5pts): render house

@Component({
  selector: 'app-house-card',
  template: ``,
  styles: []
})
export class HouseCardComponent {
  @Input() house: House;
}
