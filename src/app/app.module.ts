import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'real-estate',
                pathMatch: 'full'
            },
            {
                path: 'real-estate',
                loadChildren: './real-estate/real-estate.module#RealEstateModule'
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
