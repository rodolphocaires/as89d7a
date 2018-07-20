import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City, HouseFilters } from '../models';

/* TODO(5pts): create form controls */
/* TODO(5pts): render form */

@Component({
  selector: 'app-houses-filters',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <button mat-raised-button color="primary">Search</button>
    </form>
  `
})
export class HousesFiltersComponent {
  @Output() filtersChange = new EventEmitter<HouseFilters>();

  @Input()
  set filters(v: HouseFilters) {
    this.form.patchValue(v || {});
  }
  @Input() cities: City[];

  form: FormGroup;

  onSubmit() {
    this.filtersChange.emit(this.form.value);
  }
}
