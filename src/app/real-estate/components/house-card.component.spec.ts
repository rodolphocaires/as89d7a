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

        // Mocking data for test
        component.house = {
            id: 1,
            cityId: 1,
            onSale: true,
            price: 100,
            title: 'House 1',
            description: `
        Labore consequat qui laboris velit aliquip ullamco
        Lorem consequat cupidatat consectetur laboris pariatur.
        Minim elit id officia eu ex culpa irure exercitation ad ullamco eu eiusmod.
        Culpa reprehenderit ad aliquip adipisicing sint voluptate eu adipisicing enim
        incididunt enim consectetur Lorem occaecat. Velit excepteur et incididunt occaecat
        mollit voluptate nostrud ex cupidatat qui exercitation id cupidatat.
        Eiusmod sit nostrud elit officia do. Dolore ullamco id qui quis sunt irure.
            `,
            image: 'http://via.placeholder.com/150x150'
        } as House;
        fixture.detectChanges();
    });

    it('should have an instance of house object', () => {
        expect(component.house).toBeTruthy();
    });

    // TODO(1pts)
    it('should render house title', () => {
        const el = fixture.nativeElement.querySelector('mat-card-title').innerHTML;
        expect(el).toContain(component.house.title);
    });

    // TODO(1pts)
    it('should render card description', () => {
        const el = fixture.nativeElement.querySelector('#description').innerHTML;
        expect(el).toContain(component.house.description);
    });

    // TODO(1pts)
    it('should render card image', () => {
        const el = fixture.nativeElement.querySelector('[mat-card-image]').src;
        expect(el).toContain(component.house.image);
    });

    // TODO(1pts)
    it('should render house price', () => {
        const el = fixture.nativeElement.querySelector('#price').innerHTML;
        expect(el).toContain(component.house.price);
    });

    // TODO(1pts)
    it('should render house onSale if house is on sale', () => {
        const el = fixture.nativeElement.querySelector('#onSale');
        if (component.house.onSale) {
            expect(el).toBeTruthy();
        }
    });

    // TODO(1pts)
    it('should NOT render house onSale if house is not on sale', () => {
        const el = fixture.nativeElement.querySelector('#onSale');
        if (!component.house.onSale) {
            expect(el).toBeUndefined();
        }
    });
});
