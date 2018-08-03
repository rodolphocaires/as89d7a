import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { House } from '../models';
import { HouseCardComponent } from './house-card.component';
import { CustomMaterialModule } from '../custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('HouseCardComponent', () => {
    let component: HouseCardComponent;
    let fixture: ComponentFixture<HouseCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HouseCardComponent],
            imports: [
                CustomMaterialModule,
                BrowserAnimationsModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HouseCardComponent);
        component = fixture.componentInstance;
    });

    // TODO(1pts)
    it('should render house title', () => {
        const el = fixture.nativeElement.querySelector('mat-card-title');
        expect(el).toContain(component.house.title);
    });

    // TODO(1pts)
    it('should render card desription', () => { });

    // TODO(1pts)
    it('should render card image', () => { });

    // TODO(1pts)
    it('should render house price', () => { });

    // TODO(1pts)
    it('should render house onSale if house is on sale', () => { });

    // TODO(1pts)
    it('should NOT render house onSale if house is not on sale', () => { });
});
