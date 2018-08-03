import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HousesFiltersComponent } from './houses-filters.component';
import { CustomMaterialModule } from '../custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HousesFiltersComponent', () => {
    let component: HousesFiltersComponent;
    let fixture: ComponentFixture<HousesFiltersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HousesFiltersComponent],
            imports: [
                CustomMaterialModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HousesFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create filters form', () => {
        expect(component.form instanceof FormGroup).toBe(true);
    });

    // TODO(1pts)
    it('form should have cityId control', () => {
        expect(component.form.get('cityId') instanceof FormControl).toBe(true);
    });

    // TODO(1pts)
    it('should render cityId control', () => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('mat-select');
        expect(el).toBeTruthy();
    });

    // TODO(1pts)
    it('form should have priceLessThan control', () => {
        expect(component.form.get('priceLessThan') instanceof FormControl).toBe(true);
    });

    // TODO(1pts)
    it('should render priceLessThan control', () => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('input[type=number]');
        expect(el).toBeTruthy();
    });

    // TODO(1pts)
    it('form should have onSale control', () => {
        expect(component.form.get('onSale') instanceof FormControl).toBe(true);
    });

    // TODO(1pts)
    it('should render onSale control', () => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('mat-radio-group');
        expect(el).toBeTruthy();
    });
});
