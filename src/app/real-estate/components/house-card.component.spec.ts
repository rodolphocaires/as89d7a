import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { House } from '../models';
import { HouseCardComponent } from './house-card.component';
import { CustomMaterialModule } from '../custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HouseCardComponent', () => {
    let component: HouseCardComponent;
    let fixture: ComponentFixture<HouseCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HouseCardComponent],
            imports: [
                CustomMaterialModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HouseCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO(1pts)
    it('should render house title', () => { });

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
