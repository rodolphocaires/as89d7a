import { Component, Input } from '@angular/core';
import { House } from '../models';

/* TODO(5pts): render houses list */
@Component({
  selector: 'app-houses-list',
  template: ``,
  styles: []
})
export class HousesListComponent {
  @Input() houses: House[];
}
