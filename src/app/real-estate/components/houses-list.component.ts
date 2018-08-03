import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { House } from '../models';
import { MatTableDataSource } from '@angular/material/table';

/* TODO(5pts): render houses list */
@Component({
    selector: 'app-houses-list',
    template: `
    <mat-card class="houses-card">
        <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="id">
                <th mat-header-cell *matHeaderCellDef class="bold larger">ID</th>
                <td mat-cell *matCellDef="let house">{{house.id}}</td>
            </ng-container>
            <ng-container matColumnDef="title">
                <th mat-header-cell *matHeaderCellDef class="bold larger">Title</th>
                <td mat-cell *matCellDef="let house">{{house.title}}</td>
            </ng-container>
            <ng-container matColumnDef="price">
                <th mat-header-cell *matHeaderCellDef class="bold larger">Price</th>
                <td mat-cell *matCellDef="let house">{{house.price}}</td>
            </ng-container>
            <ng-container matColumnDef="onSale">
                <th mat-header-cell *matHeaderCellDef class="bold larger">On Sale</th>
                <td mat-cell *matCellDef="let house">{{house.onSale ? 'Yes' : 'No'}}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;" [routerLink]="['/real-estate', row.id]" class="clickable"></tr>
        </table>
    </mat-card>
  `,
    styles: [`
        .houses-card {
            padding: 0;
            margin: 0 0 30px 0;
        }
        .houses-card table {
            width: 100%;
        }

        .houses-card table .larger {
            font-size: 16px;
        }
    `]
})
export class HousesListComponent implements OnChanges {
    @Input() houses: House[];
    columns = ['id', 'title', 'price', 'onSale'];
    dataSource: MatTableDataSource<House[]>;

    ngOnChanges(changes: SimpleChanges) {
        this.dataSource = new MatTableDataSource<House[]>(changes.houses.currentValue);
    }
}
