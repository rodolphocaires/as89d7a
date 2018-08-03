import { Component, Input } from '@angular/core';
import { House } from '../models';

// TODO(5pts): render house

@Component({
    selector: 'app-house-card',
    template: `
    <mat-card>
        <mat-card-title>
            {{ house.title }}
        </mat-card-title>
        <img mat-card-image [src]="house.image" [attr.alt]="house.title" />
        <mat-card-content>
            <p>Price: {{ house.price | currency:'USD':true }}</p>
            <p>{{ house.onSale ? 'On Sale!' : '' }}</p>
            <p>{{ house.description }}</p>
        </mat-card-content>
    </mat-card>
  `,
    styles: [`
        .mat-card {
            margin: 0 0 30px 0;
        }
    `]
})
export class HouseCardComponent {
    @Input() house: House;
}
