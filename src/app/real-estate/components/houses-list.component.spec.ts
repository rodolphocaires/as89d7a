import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HousesListComponent } from './houses-list.component';
import { CustomMaterialModule } from '../custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('HousesListComponent', () => {
    let component: HousesListComponent;
    let fixture: ComponentFixture<HousesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HousesListComponent],
            imports: [
                CustomMaterialModule,
                BrowserAnimationsModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HousesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO(3pts)
    it('should render list of houses', () => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('[mat-table]');
        expect(el).toBeTruthy();
    });
});
