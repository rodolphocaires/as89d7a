import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { City, HouseFilters } from '../models';

/* TODO(5pts): create form controls */
/* TODO(5pts): render form */

@Component({
    selector: 'app-houses-filters',
    template: `
    <mat-accordion>
        <mat-expansion-panel>
            <mat-expansion-panel-header>
                <mat-panel-title>
                    Filters
                </mat-panel-title>
            </mat-expansion-panel-header>

            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <mat-form-field class="full-width">
                    <mat-select placeholder="City" formControlName="cityId">
                        <mat-option [value]="undefined">All</mat-option>
                        <mat-option *ngFor="let city of cities" [value]="city.id">
                        {{ city.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <mat-form-field class="full-width">
                    <input type="number" matInput placeholder="Price less than" formControlName="priceLessThan">
                </mat-form-field>

                <div>On Sale:</div>
                <mat-radio-group class="custom-radio-group" formControlName="onSale">
                    <mat-radio-button class="custom-radio-button" [value]="undefined">
                        All
                    </mat-radio-button>
                    <mat-radio-button class="custom-radio-button" [value]="true">
                        Yes
                    </mat-radio-button>
                    <mat-radio-button class="custom-radio-button" [value]="false">
                        No
                    </mat-radio-button>
                </mat-radio-group>
                <div class="margin-search">
                    <button mat-raised-button color="primary">Search</button>
                </div>
            </form>
        </mat-expansion-panel>
    </mat-accordion>
  `,
    styles: [`
    .custom-radio-group {
        display: inline-flex;
        flex-direction: column;
    }

    .custom-radio-button {
        margin: 5px;
    }

    .margin-search {
        margin: 10px 0 5px 0;
    }
  `]
})
export class HousesFiltersComponent {
    @Output() filtersChange = new EventEmitter<HouseFilters>();

    @Input()
    set filters(v: HouseFilters) {
        this.form.patchValue(v || {});
    }
    @Input() cities: City[];

    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            cityId: new FormControl(),
            priceLessThan: new FormControl(),
            onSale: new FormControl()
        });
    }

    onSubmit() {
        this.filtersChange.emit(this.form.value);
    }
}
