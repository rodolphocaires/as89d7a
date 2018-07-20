import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CitiesService } from '../apis/cities.service';
import { HousesService } from '../apis/houses.service';
import { City, House, HouseFilters } from '../models';

@Component({
  selector: 'app-house-listings',
  template: `
    <app-houses-filters
      [cities]="cities$ | async"
      [filters]="filters$ | async"
      (filtersChange)="onFiltersChange($event)">
    </app-houses-filters>

    <app-houses-list
      [houses]="houses$ | async">
    </app-houses-list>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class HouseListingsComponent implements OnInit {
  cities$: Observable<City[]>;
  filters$: Observable<HouseFilters>;
  houses$: Observable<House[]>;

  constructor(
    private citiesAPI: CitiesService,
    private houseAPI: HousesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    /*
    1.TODO(1pts)
      Goal: fetch all cities
      Implementation: set this.cities$

    2. TODO(5pts)
      Goal: parse query params stream into filters object
      Implementation: set this.filters$
      Hint:
        query params: real-estate?cityId=3&onSale=false&priceLessThan=244
        parsed value: { cityId: 3, onSale: false, priceLessThan: 244 }

    3. TODO(8pts)
      Goal: fetch all houses matching current filters
      Implementation: set this.houses$
      Hint: this example includes using higher order observables.
            we must switch from the filters$ stream into the houses$ stream.

    */
  }

  onFiltersChange(queryParams: HouseFilters) {
    /* TODO(1pts)
      Goal: update URL query params with the new filters
    */
  }
}
